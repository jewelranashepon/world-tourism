"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { requireAdmin } from "@/lib/auth"
import { hash } from "bcrypt"

// Helper function to generate a unique slug
async function generateUniqueSlug(baseSlug: string): Promise<string> {
  // Check if the slug already exists
  const existingPost = await prisma.post.findUnique({
    where: { slug: baseSlug },
  })

  // If it doesn't exist, we can use it
  if (!existingPost) {
    return baseSlug
  }

  // Otherwise, add a random suffix and try again
  const randomSuffix = Math.floor(Math.random() * 1000)
  const newSlug = `${baseSlug}-${randomSuffix}`
  return generateUniqueSlug(newSlug)
}

// Update the createPost function to provide better error handling and logging
export async function createPost(formData: FormData) {
  try {
    const user = await requireAdmin()

    const title = formData.get("title") as string
    let slug = (formData.get("slug") as string).trim().toLowerCase()

    // Replace spaces with hyphens and remove special characters
    slug = slug.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

    // Generate a unique slug if needed
    const uniqueSlug = await generateUniqueSlug(slug)

    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    const image = (formData.get("image") as string) || null
    const location = (formData.get("location") as string) || null
    const continent = (formData.get("continent") as string) || null
    const published = formData.get("published") === "true"
    const featured = formData.get("featured") === "true"
    const tags = (formData.get("tags") as string) || ""

    // Log the data being submitted for debugging
    console.log("Creating post with data:", {
      title,
      slug: uniqueSlug,
      excerpt: excerpt.substring(0, 20) + "...", // Log just the beginning for brevity
      image,
      location,
      continent,
      published,
      featured,
      tagsCount: tags.split(",").filter(Boolean).length,
    })

    // Create or connect tags
    const tagList = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)

    const tagObjects = []

    if (tagList.length > 0) {
      for (const tagName of tagList) {
        const tagSlug = tagName.toLowerCase().replace(/\s+/g, "-")

        const existingTag = await prisma.tag.findUnique({
          where: { slug: tagSlug },
        })

        if (existingTag) {
          tagObjects.push({ id: existingTag.id })
        } else {
          const newTag = await prisma.tag.create({
            data: {
              name: tagName,
              slug: tagSlug,
            },
          })

          tagObjects.push({ id: newTag.id })
        }
      }
    }

    // Create the post
    const newPost = await prisma.post.create({
      data: {
        title,
        slug: uniqueSlug, // Use the unique slug
        excerpt,
        content,
        image,
        location,
        continent,
        published,
        featured,
        author: {
          connect: { id: user.id },
        },
        tags:
          tagObjects.length > 0
            ? {
                connect: tagObjects,
              }
            : undefined,
      },
    })

    console.log("Post created successfully with ID:", newPost.id)

    revalidatePath("/")
    revalidatePath("/blog")

    // Use return instead of redirect to avoid client-side errors
    return { success: true, postId: newPost.id }
  } catch (error) {
    console.error("Error creating post:", error)

    // Provide more specific error messages
    if (error.code === "P2002" && error.meta?.target?.includes("slug")) {
      throw new Error("A post with this slug already exists. Please choose a different slug.")
    }

    // Check for database connection issues
    if (error.code === "P1001" || error.code === "P1002") {
      throw new Error("Database connection error. Please check your database configuration.")
    }

    // Check if it's a validation error
    if (error.name === "ValidationError") {
      throw new Error(`Validation error: ${error.message}`)
    }

    throw new Error(`Failed to create post: ${error.message || "Unknown error"}`)
  }
}

// Also update the updatePost function to handle errors better
export async function updatePost(formData: FormData) {
  try {
    await requireAdmin()

    const id = formData.get("id") as string
    const title = formData.get("title") as string
    let slug = (formData.get("slug") as string).trim().toLowerCase()

    // Replace spaces with hyphens and remove special characters
    slug = slug.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

    // Check if the slug exists but belongs to a different post
    const existingPost = await prisma.post.findUnique({
      where: { slug },
    })

    if (existingPost && existingPost.id !== id) {
      // Generate a unique slug if the current one is taken by another post
      slug = await generateUniqueSlug(slug)
    }

    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    const image = (formData.get("image") as string) || null
    const location = (formData.get("location") as string) || null
    const continent = (formData.get("continent") as string) || null
    const published = formData.get("published") === "true"
    const featured = formData.get("featured") === "true"
    const tags = (formData.get("tags") as string) || ""

    // First, disconnect all existing tags
    await prisma.post.update({
      where: { id },
      data: {
        tags: {
          set: [],
        },
      },
    })

    // Create or connect tags
    const tagList = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)

    const tagObjects = []

    if (tagList.length > 0) {
      for (const tagName of tagList) {
        const tagSlug = tagName.toLowerCase().replace(/\s+/g, "-")

        const existingTag = await prisma.tag.findUnique({
          where: { slug: tagSlug },
        })

        if (existingTag) {
          tagObjects.push({ id: existingTag.id })
        } else {
          const newTag = await prisma.tag.create({
            data: {
              name: tagName,
              slug: tagSlug,
            },
          })

          tagObjects.push({ id: newTag.id })
        }
      }
    }

    await prisma.post.update({
      where: { id },
      data: {
        title,
        slug,
        excerpt,
        content,
        image,
        location,
        continent,
        published,
        featured,
        tags:
          tagObjects.length > 0
            ? {
                connect: tagObjects,
              }
            : undefined,
      },
    })

    revalidatePath("/")
    revalidatePath("/blog")
    revalidatePath(`/blog/${slug}`)
    redirect("/admin/dashboard")
  } catch (error) {
    console.error("Error updating post:", error)

    // Provide more specific error messages
    if (error.code === "P2002" && error.meta?.target?.includes("slug")) {
      throw new Error("A post with this slug already exists. Please choose a different slug.")
    }

    throw new Error("Failed to update post. Please check your inputs and try again.")
  }
}

// Delete a blog post
export async function deletePost(formData: FormData) {
  try {
    await requireAdmin()

    const id = formData.get("id") as string

    await prisma.post.delete({
      where: { id },
    })

    revalidatePath("/")
    revalidatePath("/blog")
    redirect("/admin/dashboard")
  } catch (error) {
    console.error("Error deleting post:", error)
    throw new Error("Failed to delete post.")
  }
}

// Create a new admin user (for initial setup)
export async function createAdminUser(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const name = formData.get("name") as string
    const password = formData.get("password") as string

    const hashedPassword = await hash(password, 10)

    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: "ADMIN",
      },
    })

    redirect("/admin")
  } catch (error) {
    console.error("Error creating admin user:", error)
    throw new Error("Failed to create admin user. Please try again.")
  }
}


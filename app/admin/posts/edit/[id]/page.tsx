"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import AdminLayout from "@/components/admin-layout"
import ImageUpload from "@/components/image-upload"
import SlugInput from "@/components/slug-input"
import { updatePost } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

interface EditPostPageProps {
  params: {
    id: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function EditPostPage({ params, searchParams }: EditPostPageProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const [imageUrl, setImageUrl] = useState((searchParams.image as string) || "")
  const [title, setTitle] = useState((searchParams.title as string) || "")

  // Parse the post data from URL search params
  const post = {
    id: params.id,
    title: (searchParams.title as string) || "",
    slug: (searchParams.slug as string) || "",
    excerpt: (searchParams.excerpt as string) || "",
    content: (searchParams.content as string) || "",
    image: (searchParams.image as string) || "",
    location: (searchParams.location as string) || "",
    continent: (searchParams.continent as string) || "",
    published: searchParams.published === "true",
    featured: searchParams.featured === "true",
    tags: (searchParams.tags as string) || "",
  }

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormError("")

    // Add the image URL to the form data
    if (imageUrl) {
      formData.set("image", imageUrl)
    }

    try {
      await updatePost(formData)
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "An error occurred while updating the post")
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred while updating the post",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  const handleImageUploaded = (url: string) => {
    setImageUrl(url)
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Blog Post</h1>
          <p className="text-muted-foreground">Update your blog post details</p>
        </div>

        {formError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded dark:bg-red-900/50 dark:border-red-800 dark:text-red-400">
            {formError}
          </div>
        )}

        <form action={handleSubmit}>
          <input type="hidden" name="id" value={post.id} />
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
              <CardDescription>Edit the details for your blog post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter post title"
                  defaultValue={post.title}
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </div>

              <SlugInput defaultValue={post.slug} titleValue={title} />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" placeholder="e.g. Paris, France" defaultValue={post.location} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="continent">Continent</Label>
                  <Select name="continent" defaultValue={post.continent}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select continent" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="Africa">Africa</SelectItem>
                      <SelectItem value="Asia">Asia</SelectItem>
                      <SelectItem value="Europe">Europe</SelectItem>
                      <SelectItem value="North America">North America</SelectItem>
                      <SelectItem value="South America">South America</SelectItem>
                      <SelectItem value="Australia & Oceania">Australia & Oceania</SelectItem>
                      <SelectItem value="Antarctica">Antarctica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  placeholder="Brief summary of the post"
                  rows={3}
                  defaultValue={post.excerpt}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Write your blog post content here..."
                  rows={10}
                  defaultValue={post.content}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Featured Image</Label>
                <ImageUpload onImageUploaded={handleImageUploaded} defaultImageUrl={post.image} />
                <p className="text-sm text-muted-foreground">
                  Upload an image or enter a URL. You can use /placeholder.svg for testing.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  name="tags"
                  placeholder="Travel, Adventure, Tips (comma separated)"
                  defaultValue={post.tags}
                />
                <p className="text-sm text-muted-foreground">
                  Enter tags separated by commas. These help categorize your posts.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="published" name="published" value="true" defaultChecked={post.published} />
                <Label htmlFor="published">Published</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="featured" name="featured" value="true" defaultChecked={post.featured} />
                <Label htmlFor="featured">Feature this post on homepage</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update Post"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </AdminLayout>
  )
}


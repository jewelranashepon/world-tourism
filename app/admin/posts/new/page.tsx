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
import { createPost } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"
import SlugInput from "@/components/input-slug"

export default function NewPostPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [title, setTitle] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormError("")

    // Add the image URL to the form data
    if (imageUrl) {
      formData.set("image", imageUrl)
    }

    try {
      const result = await createPost(formData)

      if (result?.success) {
        toast({
          title: "Success",
          description: "Post created successfully!",
        })
        router.push("/admin/dashboard")
      }
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "An error occurred while creating the post")
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred while creating the post",
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
          <h1 className="text-3xl font-bold tracking-tight">Create New Blog Post</h1>
          <p className="text-muted-foreground">Add a new blog post to your website</p>
        </div>

        {formError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded dark:bg-red-900/50 dark:border-red-800 dark:text-red-400">
            {formError}
          </div>
        )}

        <form action={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
              <CardDescription>Enter the details for your new blog post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter post title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </div>

              <SlugInput titleValue={title} />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" placeholder="e.g. Paris, France" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="continent">Continent</Label>
                  <Select name="continent">
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
                <Textarea id="excerpt" name="excerpt" placeholder="Brief summary of the post" rows={3} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Write your blog post content here..."
                  rows={10}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Featured Image</Label>
                <ImageUpload onImageUploaded={handleImageUploaded} />
                <p className="text-sm text-muted-foreground">
                  Upload an image or enter a URL. For testing, you can use "/placeholder.svg" or any external image URL.
                  {!process.env.BLOB_READ_WRITE_TOKEN && (
                    <span className="block mt-1 text-amber-600 dark:text-amber-400">
                      Note: Direct image uploads require the BLOB_READ_WRITE_TOKEN environment variable.
                    </span>
                  )}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" name="tags" placeholder="Travel, Adventure, Tips (comma separated)" />
                <p className="text-sm text-muted-foreground">
                  Enter tags separated by commas. These help categorize your posts.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="published" name="published" value="true" />
                <Label htmlFor="published">Publish immediately</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="featured" name="featured" value="true" />
                <Label htmlFor="featured">Feature this post on homepage</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Post"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </AdminLayout>
  )
}


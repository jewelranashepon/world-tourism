"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X, AlertCircle } from "lucide-react"
import Image from "next/image"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ImageUploadProps {
  onImageUploaded: (imageUrl: string) => void
  defaultImageUrl?: string
}

export default function ImageUpload({ onImageUploaded, defaultImageUrl = "" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState("")
  const [imageUrl, setImageUrl] = useState(defaultImageUrl)
  const [urlInput, setUrlInput] = useState(defaultImageUrl)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File size exceeds 5MB limit")
      return
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      setUploadError("File must be an image")
      return
    }

    setIsUploading(true)
    setUploadError("")

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to upload image")
      }

      const data = await response.json()
      setImageUrl(data.url)
      setUrlInput(data.url)
      onImageUploaded(data.url)
    } catch (error) {
      console.error("Error uploading image:", error)

      // Check for specific Blob token error
      if (error.message && error.message.includes("BLOB_READ_WRITE_TOKEN")) {
        setUploadError("Image upload service is not configured. Please use an image URL instead.")
      } else {
        setUploadError(error instanceof Error ? error.message : "Failed to upload image")
      }
    } finally {
      setIsUploading(false)
    }
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value)
  }

  const handleUrlSubmit = () => {
    if (urlInput) {
      setImageUrl(urlInput)
      onImageUploaded(urlInput)
    }
  }

  const handleRemoveImage = () => {
    setImageUrl("")
    setUrlInput("")
    onImageUploaded("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="image-url">Image URL</Label>
        <div className="flex gap-2">
          <Input
            id="image-url"
            value={urlInput}
            onChange={handleUrlChange}
            placeholder="https://example.com/image.jpg"
            className="flex-1"
          />
          <Button type="button" onClick={handleUrlSubmit} variant="outline">
            Use URL
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Input
            ref={fileInputRef}
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="flex gap-2"
          >
            <Upload className="h-4 w-4" />
            {isUploading ? "Uploading..." : "Upload Image"}
          </Button>
        </div>
        <span className="text-sm text-muted-foreground">or drag and drop</span>
      </div>

      {uploadError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{uploadError}</AlertDescription>
        </Alert>
      )}

      {imageUrl && (
        <div className="relative mt-4 rounded-md border border-border overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={imageUrl || "/placeholder.svg"} alt="Uploaded image preview" fill className="object-cover" />
          </div>
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemoveImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}


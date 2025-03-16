"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SlugInputProps {
  defaultValue?: string
  titleValue?: string
}

export default function SlugInput({ defaultValue = "", titleValue = "" }: SlugInputProps) {
  const [slug, setSlug] = useState(defaultValue)
  const [isAutoGenerated, setIsAutoGenerated] = useState(!defaultValue)

  // Generate slug from title when title changes and slug is in auto mode
  useEffect(() => {
    if (isAutoGenerated && titleValue) {
      const generatedSlug = titleValue
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, "") // Remove special characters
        .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen

      setSlug(generatedSlug)
    }
  }, [titleValue, isAutoGenerated])

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value)
    setIsAutoGenerated(false) // Once manually edited, turn off auto generation
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="slug">Slug</Label>
      <Input id="slug" name="slug" placeholder="post-url-slug" value={slug} onChange={handleSlugChange} required />
      <p className="text-sm text-muted-foreground">
        {isAutoGenerated
          ? "Automatically generated from title. Edit to customize."
          : "This will be used in the URL. Use lowercase letters, numbers, and hyphens only."}
      </p>
    </div>
  )
}


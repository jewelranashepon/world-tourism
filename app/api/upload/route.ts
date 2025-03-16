import { NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { requireAdmin } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    // Verify admin user
    await requireAdmin()

    // Get the form data from the request
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "File must be an image" }, { status: 400 })
    }

    // Generate a unique filename with original extension
    const extension = file.name.split(".").pop()
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${extension}`

    try {
      // Upload to Vercel Blob
      const blob = await put(filename, file, {
        access: "public",
      })

      // Return the URL of the uploaded file
      return NextResponse.json({ url: blob.url })
    } catch (blobError) {
      console.error("Blob storage error:", blobError)

      // Check if it's a token error
      if (blobError.message && blobError.message.includes("BLOB_READ_WRITE_TOKEN")) {
        return NextResponse.json(
          { error: "Blob storage not configured. Please set up BLOB_READ_WRITE_TOKEN environment variable." },
          { status: 500 },
        )
      }

      throw blobError
    }
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json({ error: error.message || "Failed to upload file" }, { status: 500 })
  }
}


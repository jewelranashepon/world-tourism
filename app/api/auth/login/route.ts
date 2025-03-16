import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { authenticateUser } from "@/lib/auth"

export async function POST(request: Request) {
  const body = await request.json()
  const { email, password } = body

  const user = await authenticateUser(email, password)

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  // Fix: await the cookies() call
  const cookieStore = cookies()

  // Set session cookie
  cookieStore.set({
    name: "session",
    value: user.id,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })

  return NextResponse.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  })
}


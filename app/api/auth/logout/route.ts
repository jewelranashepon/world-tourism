import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST() {
  // Fix: await the cookies() call
  const cookieStore = cookies()
  cookieStore.delete("session")

  return NextResponse.json({ success: true })
}


import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { compare } from "bcrypt"

export async function getSession() {
  // Fix: await the cookies() call
  const cookieStore = cookies()
  const session = cookieStore.get("session")?.value

  if (!session) return null

  return session
}

export async function getCurrentUser() {
  const session = await getSession()

  if (!session) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: { id: session },
  })

  return user
}

export async function requireAdmin() {
  const user = await getCurrentUser()

  if (!user || user.role !== "ADMIN") {
    redirect("/admin")
  }

  return user
}

export async function authenticateUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return null
  }

  const passwordMatch = await compare(password, user.password)

  if (!passwordMatch) {
    return null
  }

  return user
}


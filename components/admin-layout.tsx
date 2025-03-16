"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BarChart, FileText, Globe, Home, LogOut, Menu, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useToast } from "@/hooks/use-toast"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { name: "Dashboard", path: "/admin/dashboard", icon: Home },
    { name: "Blog Posts", path: "/admin/posts", icon: FileText },
    { name: "Continents", path: "/admin/continents", icon: Globe },
    { name: "Analytics", path: "/admin/analytics", icon: BarChart },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ]

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      })

      if (!response.ok) {
        throw new Error("Logout failed")
      }

      router.push("/admin")
      router.refresh()

      toast({
        title: "Logged out successfully",
        description: "You have been logged out of the admin panel.",
      })
    } catch (error) {
      toast({
        title: "Logout failed",
        description: "There was a problem logging you out. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-2 text-lg font-medium">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                <Globe className="h-6 w-6 text-blue-600" />
                <span>World Tourism</span>
              </Link>
              <div className="my-4 h-px bg-muted" />
              {routes.map((route) => {
                const Icon = route.icon
                return (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:text-primary ${
                      pathname === route.path ? "bg-muted font-medium text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {route.name}
                  </Link>
                )
              })}
              <div className="my-4 h-px bg-muted" />
              <button
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => {
                  setIsOpen(false)
                  handleLogout()
                }}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold lg:hidden">
            <Globe className="h-6 w-6 text-blue-600" />
            <span>World Tourism</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <Globe className="mr-2 h-4 w-4" />
                View Site
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="grid flex-1 lg:grid-cols-[240px_1fr]">
        <aside className="hidden border-r bg-muted/40 lg:block">
          <nav className="grid gap-2 p-6 text-sm">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Globe className="h-6 w-6 text-blue-600" />
              <span>World Tourism</span>
            </Link>
            <div className="my-4 h-px bg-muted" />
            {routes.map((route) => {
              const Icon = route.icon
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:text-primary ${
                    pathname === route.path ? "bg-muted font-medium text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {route.name}
                </Link>
              )
            })}
            <div className="my-4 h-px bg-muted" />
            <button
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-primary"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </nav>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}


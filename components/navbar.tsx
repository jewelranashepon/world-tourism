"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Globe, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Continents", path: "/continents" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">World Tourism</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === route.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/admin" className="hidden md:block">
            <Button variant="outline" size="sm">
              Admin Login
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-6">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === route.path ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {route.name}
                  </Link>
                ))}
                <Link href="/admin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Admin Login
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


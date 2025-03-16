import Link from "next/link"
import { Globe, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">World Tourism</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Discover the world's most beautiful destinations with our comprehensive travel guides and blog.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="text-muted-foreground hover:text-foreground">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/continents" className="text-muted-foreground hover:text-foreground">
                  Continents
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link href="/travel-guides" className="text-muted-foreground hover:text-foreground">
                  Travel Guides
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Travel Street, Global City</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@worldtourism.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} World Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


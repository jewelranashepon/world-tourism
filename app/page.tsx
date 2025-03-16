import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Globe, MapPin, Users, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import TestimonialCard from "@/components/testimonial-card"
import PopularDestinationCard from "@/components/popular-destination-card"
import TravelTipCard from "@/components/travel-tip-card"
import { prisma } from "@/lib/prisma"

export default async function Home() {
  // Fetch featured blog posts from the database
  const featuredPosts = await prisma.post.findMany({
    where: {
      published: true,
      featured: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover the World's Most Beautiful Destinations
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore breathtaking landscapes, vibrant cultures, and unforgettable experiences across all seven
                  continents.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/destinations">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Explore Destinations <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button size="lg" variant="outline">
                    Read Travel Stories
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=550&width=800"
              width={800}
              height={550}
              alt="World map with travel destinations"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Destinations</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the most visited and loved destinations around the world
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {popularDestinations.map((destination) => (
              <PopularDestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/destinations">
              <Button size="lg" variant="outline">
                View All Destinations <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Continents Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore by Continent</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover unique experiences and breathtaking destinations across all seven continents.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {continents.map((continent) => (
              <Link key={continent.name} href={`/continents/${continent.slug}`} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={continent.image || "/placeholder.svg"}
                      alt={continent.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold text-white">{continent.name}</h3>
                      <p className="text-sm text-white/80">{continent.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Travel Tips & Guides</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Expert advice to help you plan your perfect trip
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {travelTips.map((tip) => (
              <TravelTipCard key={tip.id} tip={tip} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/travel-tips">
              <Button size="lg" variant="outline">
                View All Tips <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Travel Stories</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get inspired by our latest travel blogs and plan your next adventure.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.location || "Global"}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="gap-1">
                      Read more <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/blog">
              <Button size="lg" variant="outline">
                View All Blog Posts <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Travelers Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Read testimonials from travelers who have explored the world with us
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Newsletter</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Subscribe to receive travel tips, exclusive offers, and inspiration for your next adventure
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                  <Input type="email" placeholder="Enter your email" className="w-full" required />
                </div>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Subscribe <Mail className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We provide authentic travel experiences and expert guidance for your next adventure.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle>Global Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Our team of experienced travelers has explored destinations across all seven continents.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Join a community of passionate travelers sharing authentic experiences and tips.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle>Curated Destinations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Discover hidden gems and iconic landmarks carefully selected by our travel experts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const continents = [
  {
    name: "Africa",
    slug: "africa",
    description: "Experience diverse wildlife and vibrant cultures",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Asia",
    slug: "asia",
    description: "Ancient traditions meet modern innovation",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Europe",
    slug: "europe",
    description: "Historic cities and picturesque landscapes",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "North America",
    slug: "north-america",
    description: "Natural wonders and cosmopolitan cities",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "South America",
    slug: "south-america",
    description: "Rainforests, mountains, and vibrant culture",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Australia & Oceania",
    slug: "australia-oceania",
    description: "Island paradises and unique wildlife",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Antarctica",
    slug: "antarctica",
    description: "Earth's final frontier of pristine wilderness",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const popularDestinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    slug: "santorini-greece",
    description: "Famous for its stunning sunsets, white-washed buildings, and blue domes",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    continent: "Europe",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    slug: "bali-indonesia",
    description: "A paradise island known for beaches, temples, and lush rice terraces",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    continent: "Asia",
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    slug: "machu-picchu-peru",
    description: "Ancient Incan citadel set high in the Andes Mountains",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    continent: "South America",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The travel guides were incredibly detailed and helped me discover hidden gems I would have never found on my own. Highly recommend!",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Sydney, Australia",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I've planned three trips using this website and each one was better than the last. The continent guides are especially helpful.",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    location: "Madrid, Spain",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The blog posts inspired me to visit places I'd never considered before. My trip to Southeast Asia was unforgettable thanks to these recommendations.",
  },
]

const travelTips = [
  {
    id: 1,
    title: "Packing Essentials for Any Trip",
    slug: "packing-essentials",
    excerpt: "Learn how to pack efficiently for any destination with our comprehensive guide.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Travel Planning",
  },
  {
    id: 2,
    title: "Budget Travel: How to See the World for Less",
    slug: "budget-travel-guide",
    excerpt: "Discover money-saving tips and tricks to make your travel dreams a reality without breaking the bank.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Budget Travel",
  },
  {
    id: 3,
    title: "Solo Travel Safety Tips",
    slug: "solo-travel-safety",
    excerpt: "Essential safety advice for solo travelers to ensure a worry-free and enjoyable journey.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Solo Travel",
  },
]


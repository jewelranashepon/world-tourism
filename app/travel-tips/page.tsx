import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Compass, CreditCard } from "lucide-react"

export default function TravelTipsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>Travel Tips</span>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Travel Tips & Guides</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Expert advice to help you plan your perfect trip and make the most of your travel experiences.
          </p>
        </div>
      </div>

      {/* Featured Tip */}
      <div className="mb-16">
        <div className="relative rounded-xl overflow-hidden">
          <div className="relative h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Featured Travel Tip"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-8">
            <Badge className="mb-2">Featured</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              The Ultimate Packing Guide for Any Destination
            </h2>
            <p className="text-white/90 mb-4 max-w-2xl">
              Learn how to pack efficiently for any trip, from weekend getaways to long-term travel, with our
              comprehensive packing strategies.
            </p>
            <Link href="/travel-tips/ultimate-packing-guide">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
                Read Guide
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Tabs */}
      <Tabs defaultValue="all" className="mb-16">
        <TabsList className="mb-8 flex flex-wrap justify-start">
          <TabsTrigger value="all">All Tips</TabsTrigger>
          <TabsTrigger value="planning">Trip Planning</TabsTrigger>
          <TabsTrigger value="budget">Budget Travel</TabsTrigger>
          <TabsTrigger value="packing">Packing Tips</TabsTrigger>
          <TabsTrigger value="safety">Safety & Health</TabsTrigger>
          <TabsTrigger value="photography">Photography</TabsTrigger>
          <TabsTrigger value="solo">Solo Travel</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {travelTips.map((tip) => (
              <Link key={tip.id} href={`/travel-tips/${tip.slug}`} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={tip.image || "/placeholder.svg"}
                      alt={tip.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {tip.category}
                    </Badge>
                    <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">{tip.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">{tip.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {travelTips
                .filter((tip) => tip.categorySlug === category.value)
                .map((tip) => (
                  <Link key={tip.id} href={`/travel-tips/${tip.slug}`} className="group">
                    <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={tip.image || "/placeholder.svg"}
                          alt={tip.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">
                          {tip.category}
                        </Badge>
                        <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">{tip.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">{tip.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Travel Resources */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Essential Travel Resources</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <resource.icon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline mt-auto"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get Travel Tips in Your Inbox</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for the latest travel tips, destination guides, and exclusive content
              delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 dark:border-gray-700 dark:bg-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="relative h-[200px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Newsletter subscription"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const categories = [
  { name: "Trip Planning", value: "planning" },
  { name: "Budget Travel", value: "budget" },
  { name: "Packing Tips", value: "packing" },
  { name: "Safety & Health", value: "safety" },
  { name: "Photography", value: "photography" },
  { name: "Solo Travel", value: "solo" },
]

const travelTips = [
  {
    id: 1,
    title: "Packing Essentials for Any Trip",
    slug: "packing-essentials",
    excerpt: "Learn how to pack efficiently for any destination with our comprehensive guide to travel essentials.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Packing Tips",
    categorySlug: "packing",
  },
  {
    id: 2,
    title: "Budget Travel: How to See the World for Less",
    slug: "budget-travel-guide",
    excerpt: "Discover money-saving tips and tricks to make your travel dreams a reality without breaking the bank.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Budget Travel",
    categorySlug: "budget",
  },
  {
    id: 3,
    title: "Solo Travel Safety Tips",
    slug: "solo-travel-safety",
    excerpt: "Essential safety advice for solo travelers to ensure a worry-free and enjoyable journey.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Solo Travel",
    categorySlug: "solo",
  },
  {
    id: 4,
    title: "How to Plan the Perfect Itinerary",
    slug: "perfect-itinerary-planning",
    excerpt:
      "Create balanced travel itineraries that include must-see sights while leaving room for spontaneous adventures.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Trip Planning",
    categorySlug: "planning",
  },
  {
    id: 5,
    title: "Travel Photography: Capturing Memorable Moments",
    slug: "travel-photography-guide",
    excerpt: "Tips and techniques for taking stunning travel photos, regardless of your camera equipment.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Photography",
    categorySlug: "photography",
  },
  {
    id: 6,
    title: "Staying Healthy While Traveling",
    slug: "staying-healthy-traveling",
    excerpt: "Practical advice for maintaining your health and avoiding common travel illnesses during your journey.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Safety & Health",
    categorySlug: "safety",
  },
  {
    id: 7,
    title: "How to Find Authentic Local Experiences",
    slug: "authentic-local-experiences",
    excerpt: "Go beyond tourist attractions and connect with local culture for more meaningful travel experiences.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Trip Planning",
    categorySlug: "planning",
  },
  {
    id: 8,
    title: "Digital Nomad Essentials",
    slug: "digital-nomad-essentials",
    excerpt: "Everything you need to know about working remotely while traveling the world.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Solo Travel",
    categorySlug: "solo",
  },
  {
    id: 9,
    title: "Travel Insurance: What You Need to Know",
    slug: "travel-insurance-guide",
    excerpt: "Understanding travel insurance options and choosing the right coverage for your trip.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Safety & Health",
    categorySlug: "safety",
  },
]

const resources = [
  {
    title: "Booking Flights",
    description: "Find the best deals on flights with our recommended booking platforms.",
    link: "#",
    icon: Compass,
  },
  {
    title: "Accommodation",
    description: "Discover great places to stay, from budget hostels to luxury hotels.",
    link: "#",
    icon: BookOpen,
  },
  {
    title: "Travel Insurance",
    description: "Protect yourself from unexpected events with comprehensive travel insurance.",
    link: "#",
    icon: CreditCard,
  },
  {
    title: "Trip Planner",
    description: "Plan your itinerary and keep track of your travel dates.",
    link: "#",
    icon: Calendar,
  },
]


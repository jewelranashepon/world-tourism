import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContinentsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>Continents</span>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore by Continent</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover unique experiences and breathtaking destinations across all seven continents.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {continents.map((continent) => (
          <Link key={continent.name} href={`/continents/${continent.slug}`} className="group">
            <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
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
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-500 dark:text-gray-400">{continent.description}</p>
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  Explore {continent.name} <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Planning a Multi-Continent Journey?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Our travel experts can help you create the perfect itinerary that spans multiple continents. From
              logistics to accommodations, we've got you covered.
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="World map with travel routes"
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
const continents = [
  {
    name: "Africa",
    slug: "africa",
    description: "Experience diverse wildlife and vibrant cultures across the vast landscapes of Africa.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Asia",
    slug: "asia",
    description: "Discover ancient traditions and modern innovations throughout the diverse countries of Asia.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Europe",
    slug: "europe",
    description: "Explore historic cities, picturesque villages, and stunning landscapes across Europe.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "North America",
    slug: "north-america",
    description: "From bustling cities to natural wonders, North America offers diverse experiences for all travelers.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "South America",
    slug: "south-america",
    description: "Adventure through rainforests, mountains, and vibrant cultures in South America.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Australia & Oceania",
    slug: "australia-oceania",
    description: "Discover island paradises, unique wildlife, and stunning landscapes across Australia and Oceania.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Antarctica",
    slug: "antarctica",
    description: "Experience Earth's final frontier of pristine wilderness and incredible wildlife in Antarctica.",
    image: "/placeholder.svg?height=400&width=600",
  },
]


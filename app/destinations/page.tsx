import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DestinationsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>Destinations</span>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Destinations</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover amazing places around the world and plan your next adventure.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-12">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search destinations..." className="pl-10" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
        </div>
      </div>

      {/* Destinations by Continent */}
      <Tabs defaultValue="all" className="mb-16">
        <TabsList className="mb-8 flex flex-wrap justify-start">
          <TabsTrigger value="all">All Destinations</TabsTrigger>
          <TabsTrigger value="africa">Africa</TabsTrigger>
          <TabsTrigger value="asia">Asia</TabsTrigger>
          <TabsTrigger value="europe">Europe</TabsTrigger>
          <TabsTrigger value="north-america">North America</TabsTrigger>
          <TabsTrigger value="south-america">South America</TabsTrigger>
          <TabsTrigger value="australia-oceania">Australia & Oceania</TabsTrigger>
          <TabsTrigger value="antarctica">Antarctica</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations.map((destination) => (
              <Link key={destination.id} href={`/destinations/${destination.slug}`} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{destination.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{destination.description}</p>
                    <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">{destination.continent}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        {continents.map((continent) => (
          <TabsContent key={continent} value={continent.toLowerCase().replace(/\s+/g, "-")}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {destinations
                .filter((destination) => destination.continent === continent)
                .map((destination) => (
                  <Link key={destination.id} href={`/destinations/${destination.slug}`} className="group">
                    <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4 text-yellow-400"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium">{destination.rating}</span>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold">{destination.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{destination.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Featured Destination */}
      <div className="mb-16">
        <div className="relative rounded-xl overflow-hidden">
          <div className="relative h-[500px] w-full">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Featured Destination"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex items-center">
            <div className="p-8 md:p-12 lg:p-16 max-w-2xl">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Destination
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Explore the Wonders of Bali
              </h2>
              <p className="text-white/90 mb-6">
                Discover tropical beaches, lush rice terraces, ancient temples, and vibrant culture on the Island of the
                Gods.
              </p>
              <Link href="/destinations/bali-indonesia">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Discover Bali
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Planning */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 mb-12">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Need Help Planning Your Trip?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Our travel experts can help you create the perfect itinerary based on your interests, budget, and travel
              style.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
            </Link>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=600" alt="Travel planning" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const continents = ["Africa", "Asia", "Europe", "North America", "South America", "Australia & Oceania", "Antarctica"]

const destinations = [
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
  {
    id: 4,
    name: "Kyoto, Japan",
    slug: "kyoto-japan",
    description: "Historic city known for its temples, gardens, and traditional culture",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    continent: "Asia",
  },
  {
    id: 5,
    name: "Serengeti National Park, Tanzania",
    slug: "serengeti-tanzania",
    description: "Famous for the annual wildebeest migration and incredible wildlife",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    continent: "Africa",
  },
  {
    id: 6,
    name: "Paris, France",
    slug: "paris-france",
    description: "The City of Light, known for its art, cuisine, and iconic landmarks",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    continent: "Europe",
  },
  {
    id: 7,
    name: "Great Barrier Reef, Australia",
    slug: "great-barrier-reef-australia",
    description: "World's largest coral reef system with incredible marine life",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    continent: "Australia & Oceania",
  },
  {
    id: 8,
    name: "New York City, USA",
    slug: "new-york-city-usa",
    description: "Vibrant metropolis known for its skyline, culture, and energy",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.6,
    continent: "North America",
  },
]


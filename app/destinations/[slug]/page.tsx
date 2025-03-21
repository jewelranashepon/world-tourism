import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MapPin, Calendar, Globe, Star, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { allDestinations } from "@/app/data/allDestinations"


interface DestinationPageProps {
  params: {
    slug: string
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  // Find the destination data based on the slug
  const destination = allDestinations.find((d) => d.slug === params.slug)

  if (!destination) {
    return <div className="container py-12 text-center">Destination not found</div>
  }

  // Filter related destinations
  const relatedDestinations = allDestinations
    .filter((d) => d.continent === destination.continent && d.id !== destination.id)
    .slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="text-lg font-bold text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/destinations" className="text-base font-bold text-blue-600 hover:text-blue-700 dark:hover:text-blue-400">
          Destinations
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{destination.name}</span>
      </div>

      {/* Hero Section */}
      <div className="relative h-[600px] rounded-xl overflow-hidden mb-12">
        <Image
          src={destination.heroImage || "/placeholder.svg?height=500&width=1200"}
          alt={destination.name}
          fill
          className="object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="h-5 w-5 text-blue-400" />
            <span className="text-blue-300">{destination.continent}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{destination.name}</h1>
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span>
                {destination.rating} ({destination.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr] mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{destination.description}</p>
          <p className="text-gray-600 dark:text-gray-300">{destination.longDescription}</p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {destination.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-2">
                  {highlight.icon === "calendar" && <Calendar className="h-6 w-6" />}
                  {highlight.icon === "map-pin" && <MapPin className="h-6 w-6" />}
                  {highlight.icon === "info" && <Info className="h-6 w-6" />}
                  {highlight.icon === "star" && <Star className="h-6 w-6" />}
                </div>
                <h3 className="font-medium">{highlight.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Best Time to Visit</span>
                <span>{destination.bestTimeToVisit}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Language</span>
                <span>{destination.language}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Currency</span>
                <span>{destination.currency}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Time Zone</span>
                <span>{destination.timeZone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Weather</span>
                <span>{destination.weather}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[200px] rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt={`Map of ${destination.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm">
                  View Larger Map
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="attractions" className="mb-16">
        <TabsList className="mb-8">
          <TabsTrigger value="attractions">Attractions</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="food">Food & Dining</TabsTrigger>
          <TabsTrigger value="tips">Travel Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="attractions">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destination.attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={attraction.image || "/placeholder.svg?height=300&width=500"}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activities">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destination.activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg?height=300&width=500"}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{activity.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="food">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Local Cuisine</h3>
                  <p className="text-gray-600 dark:text-gray-300">{destination.food.overview}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Must-Try Dishes</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    {destination.food.dishes.map((dish, index) => (
                      <li key={index}>
                        <span className="font-medium">{dish.name}</span> - {dish.description}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Recommended Restaurants</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    {destination.food.restaurants.map((restaurant, index) => (
                      <li key={index}>
                        <span className="font-medium">{restaurant.name}</span> - {restaurant.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Before You Go</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    {destination.tips.beforeYouGo.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Getting Around</h3>
                  <p className="text-gray-600 dark:text-gray-300">{destination.tips.gettingAround}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Local Customs</h3>
                  <p className="text-gray-600 dark:text-gray-300">{destination.tips.localCustoms}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Safety</h3>
                  <p className="text-gray-600 dark:text-gray-300">{destination.tips.safety}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Destinations */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Related Destinations</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedDestinations.map((destination) => (
            <Link key={destination.id} href={`/destinations/${destination.slug}`}>
              <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={destination.heroImage || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{destination.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{destination.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/destinations">
            <Button size="lg" variant="outline">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


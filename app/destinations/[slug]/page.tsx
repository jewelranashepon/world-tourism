import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MapPin, Calendar, Globe, Star, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    <div className="container px-4 py-12 md:px-6 md:py-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/destinations" className="hover:text-blue-600 dark:hover:text-blue-400">
          Destinations
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{destination.name}</span>
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <Image
          src={destination.heroImage || "/placeholder.svg?height=500&width=1200"}
          alt={destination.name}
          fill
          className="object-cover"
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
                    src={destination.image || "/placeholder.svg"}
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

// Sample data
const allDestinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    slug: "santorini-greece",
    description: "Famous for its stunning sunsets, white  Greece",
    slug: "santorini-greece",
    description: "Famous for its stunning sunsets, white-washed buildings, and blue domes",
    image: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=500&width=1200",
    continent: "Europe",
    location: "Aegean Sea, Greece",
    rating: 4.9,
    reviews: 2453,
    bestTimeToVisit: "April to October",
    language: "Greek",
    currency: "Euro (€)",
    timeZone: "GMT+3",
    weather: "Mediterranean climate with mild winters and warm summers",
    longDescription:
      "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its two principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    highlights: [
      {
        icon: "star",
        title: "Stunning Views",
        description: "Breathtaking caldera views and famous sunsets",
      },
      {
        icon: "map-pin",
        title: "Unique Beaches",
        description: "Red Beach, Black Beach, and White Beach",
      },
      {
        icon: "calendar",
        title: "Wine Region",
        description: "Ancient vineyards producing unique wines",
      },
      {
        icon: "info",
        title: "Ancient History",
        description: "Archaeological sites including Akrotiri",
      },
    ],
    attractions: [
      {
        name: "Oia Village",
        description: "Famous for its stunning sunset views, blue-domed churches, and whitewashed buildings",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Akrotiri Archaeological Site",
        description: "Ancient Minoan settlement preserved by volcanic ash, often called the 'Greek Pompeii'",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Red Beach",
        description: "Dramatic beach with red volcanic cliffs and deep blue waters",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
    activities: [
      {
        name: "Caldera Cruise",
        description: "Sail around the caldera, visit hot springs, and enjoy views from the water",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Wine Tasting",
        description: "Tour the island's unique vineyards and taste local varieties like Assyrtiko",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Hiking",
        description: "Walk the scenic trail from Fira to Oia along the caldera's edge",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
    food: {
      overview:
        "Santorini's cuisine is characterized by fresh local ingredients grown in the volcanic soil. The island is known for its cherry tomatoes, white eggplant, capers, and unique wines made from grapes grown in the volcanic soil.",
      dishes: [
        {
          name: "Fava",
          description: "Purée of yellow split peas served with olive oil and lemon",
        },
        {
          name: "Tomatokeftedes",
          description: "Tomato fritters made with Santorini's famous cherry tomatoes",
        },
        {
          name: "Chlorotyri",
          description: "Local soft goat cheese with a distinctive flavor",
        },
      ],
      restaurants: [
        {
          name: "Metaxy Mas",
          description: "Traditional taverna with stunning views and authentic Greek dishes",
        },
        {
          name: "Selene",
          description: "Fine dining restaurant focusing on modern interpretations of traditional Santorinian cuisine",
        },
        {
          name: "To Psaraki",
          description: "Seafood restaurant in Vlychada with fresh catches and sea views",
        },
      ],
    },
    tips: {
      beforeYouGo: [
        "Book accommodations well in advance, especially for stays during peak season (June-August)",
        "Bring comfortable walking shoes for the many steps and cobblestone streets",
        "Pack sunscreen and a hat as shade can be limited",
        "Consider shoulder seasons (April-May or September-October) for fewer crowds and lower prices",
      ],
      gettingAround:
        "The island has a bus system connecting major towns, but renting a car, ATV, or scooter gives you more flexibility. Taxis are available but limited in number. Many hotels offer shuttle services to popular destinations.",
      localCustoms:
        "Greeks typically eat dinner late, around 9-10 PM. Tipping is appreciated but not mandatory; 10% is standard for good service. Dress modestly when visiting churches and monasteries.",
      safety:
        "Santorini is generally very safe for tourists. Be careful on the steep steps, especially at night. The sun can be intense, so stay hydrated and use sun protection.",
    },
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    slug: "bali-indonesia",
    description: "A paradise island known for beaches, temples, and lush rice terraces",
    image: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=500&width=1200",
    continent: "Asia",
    location: "Indonesia",
    rating: 4.8,
    reviews: 3245,
    bestTimeToVisit: "April to October",
    language: "Indonesian, Balinese",
    currency: "Indonesian Rupiah (IDR)",
    timeZone: "GMT+8",
    weather: "Tropical climate with year-round warm temperatures",
    longDescription:
      "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.",
    highlights: [
      {
        icon: "map-pin",
        title: "Beautiful Beaches",
        description: "From Kuta to Nusa Dua and beyond",
      },
      {
        icon: "calendar",
        title: "Rich Culture",
        description: "Temples, dances, and ceremonies",
      },
      {
        icon: "star",
        title: "Rice Terraces",
        description: "Stunning agricultural landscapes",
      },
      {
        icon: "info",
        title: "Wellness",
        description: "Yoga, meditation, and spa treatments",
      },
    ],
    attractions: [
      {
        name: "Tanah Lot Temple",
        description: "Ancient sea temple perched on a rock formation, especially beautiful at sunset",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Ubud Monkey Forest",
        description: "Natural sanctuary home to over 700 Balinese long-tailed macaques",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Tegallalang Rice Terraces",
        description: "Stunning terraced rice fields using traditional Balinese irrigation system",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
    activities: [
      {
        name: "Surfing",
        description: "Catch waves at beaches like Kuta, Uluwatu, and Canggu, suitable for all levels",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Yoga Retreat",
        description: "Join classes and retreats in Ubud, Bali's spiritual and wellness center",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Balinese Cooking Class",
        description: "Learn to prepare traditional dishes using local ingredients and techniques",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
    food: {
      overview:
        "Balinese cuisine is aromatic and flavorful, featuring rice as a staple accompanied by vegetables, meat, and seafood. Spices like turmeric, ginger, galangal, and chili are commonly used, creating a unique flavor profile.",
      dishes: [
        {
          name: "Babi Guling",
          description: "Spit-roasted pig stuffed with traditional spices",
        },
        {
          name: "Nasi Campur",
          description: "Mixed rice dish with small portions of vegetables, meat, and condiments",
        },
        {
          name: "Lawar",
          description: "Traditional mix of vegetables, coconut and minced meat with rich herbs and spices",
        },
      ],
      restaurants: [
        {
          name: "Locavore",
          description: "Award-winning restaurant in Ubud focusing on local, sustainable ingredients",
        },
        {
          name: "Warung Babi Guling Ibu Oka",
          description: "Famous for authentic Balinese suckling pig in Ubud",
        },
        {
          name: "Merah Putih",
          description: "Modern Indonesian cuisine in a stunning architectural setting in Seminyak",
        },
      ],
    },
    tips: {
      beforeYouGo: [
        "Bring modest clothing for temple visits (shoulders and knees must be covered)",
        "Exchange money at reputable places to avoid scams",
        "Purchase travel insurance that covers scooter riding if you plan to rent one",
        "Download Gojek or Grab apps for reliable transportation",
      ],
      gettingAround:
        "Renting a scooter is popular but can be dangerous if you're inexperienced. Private drivers are affordable and convenient for day trips. Ride-hailing apps like Gojek and Grab are available in most tourist areas.",
      localCustoms:
        "Always use your right hand for giving or receiving items. Remove shoes before entering homes and some shops. When visiting temples, wear a sarong and sash (usually available to rent or borrow at the entrance).",
      safety:
        "Be cautious when swimming as some beaches have strong currents. Drink bottled water only. Be aware of monkeys at temples and forests – they can be aggressive and may snatch belongings.",
    },
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    slug: "machu-picchu-peru",
    description: "Ancient Incan citadel set high in the Andes Mountains",
    image: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=500&width=1200",
    continent: "South America",
    location: "Cusco Region, Peru",
    rating: 4.9,
    reviews: 1876,
    bestTimeToVisit: "May to October (dry season)",
    language: "Spanish, Quechua",
    currency: "Peruvian Sol (PEN)",
    timeZone: "GMT-5",
    weather: "Varies by season with a dry winter and wet summer",
    longDescription:
      "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments, and panoramic views. Its exact former use remains a mystery.",
    highlights: [
      {
        icon: "star",
        title: "UNESCO Site",
        description: "World Heritage Site since 1983",
      },
      {
        icon: "map-pin",
        title: "Inca Architecture",
        description: "Remarkable stone construction",
      },
      {
        icon: "calendar",
        title: "Sacred Location",
        description: "Aligned with astronomical events",
      },
      {
        icon: "info",
        title: "Biodiversity",
        description: "Unique flora and fauna",
      },
    ],
    attractions: [
      {
        name: "Intihuatana Stone",
        description: "Ancient astronomical clock or calendar used by the Incas",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Temple of the Sun",
        description: "Sacred temple with exceptional stonework and astronomical alignments",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Huayna Picchu",
        description: "Steep mountain offering spectacular views of Machu Picchu from above",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
    activities: [
      {
        name: "Inca Trail Trek",
        description: "Multi-day hike along ancient paths leading to Machu Picchu",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Guided Tour",
        description: "Learn about the history and significance of the site from expert guides",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Sunrise Visit",
        description: "Experience the magical moment when the sun rises over the ancient citadel",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
    food: {
      overview:
        "Peruvian cuisine is diverse and flavorful, blending indigenous traditions with influences from Spanish, African, Chinese, and Japanese cultures. In the Cusco region near Machu Picchu, you'll find traditional Andean dishes featuring local ingredients like potatoes, corn, and quinoa.",
      dishes: [
        {
          name: "Lomo Saltado",
          description: "Stir-fried beef with onions, tomatoes, and french fries, served with rice",
        },
        {
          name: "Cuy",
          description: "Roasted guinea pig, a traditional Andean delicacy",
        },
        {
          name: "Choclo con Queso",
          description: "Large-kernel Andean corn served with local cheese",
        },
      ],
      restaurants: [
        {
          name: "Indio Feliz",
          description: "Popular restaurant in Aguas Calientes with French-Peruvian fusion",
        },
        {
          name: "Tinkuy Buffet Restaurant",
          description: "Restaurant at the Sanctuary Lodge offering views of Machu Picchu",
        },
        {
          name: "El Mapi Restaurant",
          description: "Modern restaurant in Aguas Calientes with organic, local ingredients",
        },
      ],
    },
    tips: {
      beforeYouGo: [
        "Book entrance tickets well in advance as they're limited and sell out quickly",
        "Spend a night in Aguas Calientes to allow for an early morning visit",
        "Acclimatize to the altitude in Cusco for a few days before visiting",
        "Bring sun protection, rain gear, and insect repellent regardless of season",
      ],
      gettingAround:
        "From Cusco, take a train to Aguas Calientes, then a 20-minute bus ride to the entrance. Alternatively, hike the Inca Trail or one of the alternative trails. Within the site, follow designated paths and respect barriers.",
      localCustoms:
        "Respect the sacred nature of the site. Don't touch or climb on the structures. Quechua people, descendants of the Incas, still consider the site spiritually significant.",
      safety:
        "Stay on marked paths to avoid accidents on steep terrain. Drink plenty of water and be prepared for altitude sickness symptoms. Protect valuables as the site can be crowded with tourists.",
    },
  },
]


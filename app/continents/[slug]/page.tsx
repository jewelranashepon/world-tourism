import Link from "next/link"
import Image from "next/image"
import { ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ContinentPageProps {
  params: {
    slug: string
  }
}

export default function ContinentPage({ params }: ContinentPageProps) {
  // Find the continent data based on the slug
  const continent = continents.find((c) => c.slug === params.slug)

  if (!continent) {
    return <div className="container py-12 text-center">Continent not found</div>
  }

  // Filter destinations by continent
  const continentDestinations = destinations.filter((d) => d.continent === continent.name)

  // Filter blog posts by continent
  const continentPosts = blogPosts.filter((p) => p.continent === continent.name)

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/continents" className="hover:text-blue-600 dark:hover:text-blue-400">
          Continents
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{continent.name}</span>
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src={continent.heroImage || "/placeholder.svg?height=400&width=1200"}
          alt={continent.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-2">{continent.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{continent.description}</p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Overview</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">{continent.overview}</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-gray-500 dark:text-gray-400">{continent.bestTimeToVisit}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Popular Languages</h3>
                <p className="text-gray-500 dark:text-gray-400">{continent.languages.join(", ")}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Major Regions</h3>
                <p className="text-gray-500 dark:text-gray-400">{continent.regions.join(", ")}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Currency</h3>
                <p className="text-gray-500 dark:text-gray-400">{continent.currencies.join(", ")}</p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src={continent.mapImage || "/placeholder.svg?height=300&width=500"}
              alt={`Map of ${continent.name}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="destinations" className="mb-16">
        <TabsList className="mb-8">
          <TabsTrigger value="destinations">Top Destinations</TabsTrigger>
          <TabsTrigger value="attractions">Must-See Attractions</TabsTrigger>
          <TabsTrigger value="culture">Culture & Customs</TabsTrigger>
          <TabsTrigger value="travel-tips">Travel Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="destinations">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {continentDestinations.map((destination) => (
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
        </TabsContent>

        <TabsContent value="attractions">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {continent.attractions.map((attraction, index) => (
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

        <TabsContent value="culture">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Cultural Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300">{continent.culture.overview}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Traditions</h3>
                  <p className="text-gray-600 dark:text-gray-300">{continent.culture.traditions}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cuisine</h3>
                  <p className="text-gray-600 dark:text-gray-300">{continent.culture.cuisine}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Etiquette Tips</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    {continent.culture.etiquetteTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="travel-tips">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Before You Go</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                    {continent.travelTips.beforeYouGo.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Getting Around</h3>
                  <p className="text-gray-600 dark:text-gray-300">{continent.travelTips.gettingAround}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Accommodation</h3>
                  <p className="text-gray-600 dark:text-gray-300">{continent.travelTips.accommodation}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Safety</h3>
                  <p className="text-gray-600 dark:text-gray-300">{continent.travelTips.safety}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Blog Posts */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Related Blog Posts</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {continentPosts.map((post) => (
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
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.location}</span>
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
                    Read more <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/blog">
            <Button size="lg" variant="outline">
              View All Blog Posts
            </Button>
          </Link>
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
    description: "Experience diverse wildlife and vibrant cultures",
    image: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=400&width=1200",
    mapImage: "/placeholder.svg?height=300&width=500",
    overview:
      "Africa is the world's second-largest and second-most populous continent. At about 30.3 million km² including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.3 billion people as of 2018, it accounts for about 16% of the world's human population. Africa's average population is the youngest amongst all the continents; the median age in 2012 was 19.7, when the worldwide median age was 30.4.",
    bestTimeToVisit:
      "Varies by region, but generally April-May and September-October offer good weather across many regions",
    languages: ["Arabic", "Swahili", "English", "French", "Portuguese"],
    regions: ["North Africa", "East Africa", "West Africa", "Central Africa", "Southern Africa"],
    currencies: ["Various local currencies", "CFA Franc", "South African Rand"],
    attractions: [
      {
        name: "Serengeti National Park",
        description: "Famous for its annual migration of wildebeest and zebra, offering incredible safari experiences",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Pyramids of Giza",
        description: "Ancient Egyptian pyramids and the Great Sphinx, iconic symbols of human civilization",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Victoria Falls",
        description: "One of the world's largest waterfalls, located on the border of Zambia and Zimbabwe",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
    culture: {
      overview:
        "Africa's culture is incredibly diverse, with thousands of distinct ethnic groups, each with their own languages, traditions, and customs. Music, dance, and oral traditions play important roles in many African cultures.",
      traditions:
        "Traditional practices vary widely across the continent, from the Maasai coming-of-age ceremonies to North African wedding traditions. Many communities maintain strong connections to ancestral practices while embracing modern influences.",
      cuisine:
        "African cuisine varies by region, featuring staples like fufu, injera, couscous, and various stews and grilled meats. Spices and fresh ingredients are central to many dishes.",
      etiquetteTips: [
        "Greetings are important and often elaborate in many African cultures",
        "Respect for elders is paramount across the continent",
        "When dining, in many regions it's customary to wash hands before eating",
        "In many Muslim areas of Africa, dress modestly and be aware of prayer times",
      ],
    },
    travelTips: {
      beforeYouGo: [
        "Check visa requirements well in advance",
        "Get necessary vaccinations and antimalarial medication if needed",
        "Research local customs and appropriate dress",
        "Arrange transportation in advance when possible",
      ],
      gettingAround:
        "Transportation options vary widely across Africa. Major cities have public transport, while rural areas may rely on shared taxis and buses. In some regions, domestic flights are the most practical way to cover large distances.",
      accommodation:
        "Accommodation ranges from luxury safari lodges and international hotel chains in major cities to guesthouses and homestays in smaller towns. Booking in advance is recommended, especially during peak tourist seasons.",
      safety:
        "Safety conditions vary by country and region. Research current conditions before traveling, avoid displaying valuables, and be cautious in crowded areas. Many tourist destinations have good safety records when common precautions are taken.",
    },
  },
  {
    name: "Asia",
    slug: "asia",
    description: "Ancient traditions meet modern innovation",
    image: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=400&width=1200",
    mapImage: "/placeholder.svg?height=300&width=500",
    overview:
      "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa. Asia covers an area of 44,579,000 square kilometers, about 30% of Earth's total land area and 8.7% of the Earth's total surface area.",
    bestTimeToVisit:
      "Varies greatly by region due to size, but generally October-April for Southeast Asia, March-May and September-November for East Asia",
    languages: ["Mandarin", "Hindi", "Arabic", "Japanese", "Korean", "Thai", "Vietnamese"],
    regions: ["East Asia", "Southeast Asia", "South Asia", "Central Asia", "West Asia"],
    currencies: ["Chinese Yuan", "Japanese Yen", "Indian Rupee", "Singapore Dollar", "Various local currencies"],
    attractions: [
      {
        name: "Great Wall of China",
        description: "Ancient defensive structure spanning thousands of kilometers across northern China",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Taj Mahal",
        description: "Iconic marble mausoleum in Agra, India, built by Emperor Shah Jahan",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Angkor Wat",
        description: "Massive temple complex in Cambodia, the largest religious monument in the world",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
    culture: {
      overview:
        "Asia's cultural landscape is incredibly diverse, home to some of the world's oldest civilizations. From the philosophies of Confucianism and Buddhism to the artistic traditions of calligraphy and dance, Asian cultures have profoundly influenced global history.",
      traditions:
        "Traditional practices vary widely across Asia, from Japanese tea ceremonies to Indian wedding celebrations. Many communities maintain strong connections to ancient customs while embracing modernity.",
      cuisine:
        "Asian cuisine is renowned worldwide, with distinct regional styles like Chinese, Japanese, Indian, Thai, and Vietnamese. Rice is a staple in many regions, complemented by various proteins, vegetables, and aromatic spices.",
      etiquetteTips: [
        "Remove shoes before entering homes and temples in many countries",
        "Learn basic greeting customs for each country you visit",
        "Respect religious sites and dress modestly when visiting them",
        "In many Asian cultures, saving face is important - avoid public criticism",
      ],
    },
    travelTips: {
      beforeYouGo: [
        "Research visa requirements, which vary widely across Asian countries",
        "Learn a few basic phrases in the local language",
        "Download translation apps and maps for offline use",
        "Check for any regional festivals that might affect travel plans",
      ],
      gettingAround:
        "Transportation options in Asia range from ultra-modern bullet trains in Japan and China to tuk-tuks in Southeast Asia. Major cities typically have efficient public transportation, while ride-sharing apps are widely available in urban areas.",
      accommodation:
        "Accommodation options span from luxury international hotels to budget-friendly hostels and traditional ryokans or homestays. Booking in advance is recommended, especially during peak tourist seasons and holidays.",
      safety:
        "Most tourist destinations in Asia are relatively safe, but take normal precautions against petty theft. Be aware of local laws and customs, which can vary significantly between countries. Natural disasters like typhoons and earthquakes can occur in certain regions.",
    },
  },
  {
    name: "Europe",
    slug: "europe",
    description: "Historic cities and picturesque landscapes",
    image: "/placeholder.svg?height=400&width=600",
    heroImage: "/placeholder.svg?height=400&width=1200",
    mapImage: "/placeholder.svg?height=300&width=500",
    overview:
      "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It comprises the westernmost peninsulas of the continental landmass of Eurasia, and is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east.",
    bestTimeToVisit: "April-June and September-October offer pleasant weather and fewer crowds",
    languages: ["English", "French", "German", "Spanish", "Italian", "Russian"],
    regions: ["Western Europe", "Eastern Europe", "Northern Europe", "Southern Europe", "Central Europe"],
    currencies: ["Euro", "British Pound", "Swiss Franc", "Various local currencies"],
    attractions: [
      {
        name: "Eiffel Tower",
        description: "Iconic iron lattice tower in Paris, France, a symbol of French culture",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Colosseum",
        description: "Ancient Roman amphitheater in Rome, Italy, once used for gladiatorial contests",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: "Santorini",
        description: "Stunning Greek island known for its white-washed buildings and blue domes",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
    culture: {
      overview:
        "Europe's cultural heritage is rich and diverse, shaped by centuries of artistic, philosophical, and scientific achievements. From Renaissance art to the Enlightenment, European culture has had a profound global influence.",
      traditions:
        "European traditions vary by country and region, from Spanish flamenco to German Oktoberfest. Many countries maintain strong connections to their cultural heritage while embracing contemporary influences.",
      cuisine:
        "European cuisine is diverse, from Mediterranean diets rich in olive oil and seafood to hearty Eastern European dishes. Wine and cheese production are important cultural elements in many regions.",
      etiquetteTips: [
        "Greetings often include handshakes or cheek kisses depending on the country",
        "Tipping customs vary by country - research before you go",
        "In many countries, it's polite to wait to be seated at restaurants",
        "Learn a few basic phrases in the local language as a sign of respect",
      ],
    },
    travelTips: {
      beforeYouGo: [
        "Check if you need a Schengen visa for European travel",
        "Book train tickets in advance for better prices",
        "Consider a multi-country rail pass if visiting multiple destinations",
        "Be aware of tourist taxes in some cities",
      ],
      gettingAround:
        "Europe has excellent transportation infrastructure, including extensive train networks, budget airlines, and public transit in cities. The Eurail pass is popular for multi-country trips, while buses offer budget-friendly options.",
      accommodation:
        "Accommodation ranges from luxury hotels to budget hostels and vacation rentals. In major cities, staying near public transportation can save time and money. Book well in advance during summer and holiday periods.",
      safety:
        "Europe is generally safe for tourists, though be cautious of pickpocketing in crowded tourist areas. Most countries have good healthcare systems, but travel insurance is recommended. Emergency number 112 works throughout the EU.",
    },
  },
]

interface Destination {
  id: number
  name: string
  slug: string
  description: string
  image: string
  continent: string
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Serengeti National Park",
    slug: "serengeti-national-park",
    description: "Famous for its annual migration of wildebeest and zebra, offering incredible safari experiences",
    image: "/placeholder.svg?height=400&width=600",
    continent: "Africa",
  },
  {
    id: 2,
    name: "Cairo",
    slug: "cairo",
    description: "Home to the ancient Pyramids of Giza and the Egyptian Museum with thousands of artifacts",
    image: "/placeholder.svg?height=400&width=600",
    continent: "Africa",
  },
  {
    id: 3,
    name: "Cape Town",
    slug: "cape-town",
    description: "Beautiful coastal city with Table Mountain, beaches, and vibrant culture",
    image: "/placeholder.svg?height=400&width=600",
    continent: "Africa",
  },
  {
    id: 4,
    name: "Tokyo",
    slug: "tokyo",
    description: "Japan's bustling capital, blending ultramodern and traditional elements",
    image: "/placeholder.svg?height=400&width=600",
    continent: "Asia",
  },
  {
    id: 5,
    name: "Bali",
    slug: "bali",
    description: "Indonesian island known for its forested volcanic mountains, beaches, and coral reefs",
    image: "/placeholder.svg?height=400&width=600",
    continent: "Asia",
  },
  {
    id: 6,
    name: "Bangkok",
    slug: "bangkok",
    description: "Thailand's capital city with ornate shrines, vibrant street life, and boat-filled canals",
    image: "/placeholder.svg?height=400&width=600",
    continent: "Asia",
  },
  {
    id: 7,
    name: "Paris",
    slug: "paris",
    description: "France's capital and global center for art, fashion, and culture",
    image: "/placeholder.svg?height=400&width=600",
    continent: "Europe",
  },
  {
    id: 8,
    name: "Rome",
    slug: "rome",
    description: "Italy's capital with ancient ruins, art, and vibrant street life",
    image: "/placeholder.svg?height=400&width=600",
    continent: "Europe",
  },
  {
    id: 9,
    name: "Santorini",
    slug: "santorini",
    description: "Greek island known for its stunning white buildings with blue domes",
    image: "/placeholder.svg?height=400&width=600",
    continent: "Europe",
  },
]

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  image: string
  date: string
  location: string
  continent: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Hidden Gems in Southeast Asia You Need to Visit",
    slug: "hidden-gems-southeast-asia",
    excerpt:
      "Discover off-the-beaten-path destinations in Southeast Asia that offer authentic experiences away from the tourist crowds.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 15, 2023",
    location: "Southeast Asia",
    continent: "Asia",
  },
  {
    id: 2,
    title: "A Journey Through the Ancient Cities of Europe",
    slug: "ancient-cities-europe",
    excerpt: "Explore the rich history and architectural wonders of Europe's most fascinating ancient cities.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 28, 2023",
    location: "Europe",
    continent: "Europe",
  },
  {
    id: 3,
    title: "Safari Adventures: Wildlife Encounters in Tanzania",
    slug: "safari-adventures-tanzania",
    excerpt:
      "Experience the thrill of witnessing Africa's magnificent wildlife in their natural habitat on a Tanzanian safari.",
    image: "/placeholder.svg?height=300&width=500",
    date: "January 20, 2023",
    location: "Tanzania",
    continent: "Africa",
  },
  {
    id: 4,
    title: "The Best Time to Visit the Serengeti",
    slug: "best-time-visit-serengeti",
    excerpt:
      "A comprehensive guide to planning your Serengeti safari based on seasonal wildlife movements and weather patterns.",
    image: "/placeholder.svg?height=300&width=500",
    date: "December 5, 2022",
    location: "Tanzania",
    continent: "Africa",
  },
  {
    id: 5,
    title: "Exploring Tokyo's Hidden Neighborhoods",
    slug: "tokyo-hidden-neighborhoods",
    excerpt: "Venture beyond the typical tourist spots and discover the charm of Tokyo's lesser-known districts.",
    image: "/placeholder.svg?height=300&width=500",
    date: "November 12, 2022",
    location: "Japan",
    continent: "Asia",
  },
  {
    id: 6,
    title: "A Food Lover's Guide to Paris",
    slug: "food-lovers-guide-paris",
    excerpt:
      "From classic bistros to innovative new restaurants, discover the best culinary experiences in the City of Light.",
    image: "/placeholder.svg?height=300&width=500",
    date: "October 8, 2022",
    location: "France",
    continent: "Europe",
  },
]


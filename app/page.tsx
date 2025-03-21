import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  MapPin,
  Users,
  Mail,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TestimonialCard from "@/components/testimonial-card";
import PopularDestinationCard from "@/components/popular-destination-card";
import TravelTipCard from "@/components/travel-tip-card";
import { prisma } from "@/lib/prisma";

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
  });

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        className="w-full relative py-16 md:py-28 lg:py-36 xl:py-48 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container px-6 md:px-12 lg:px-16 flex flex-col items-center text-center max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl leading-tight">
            Discover the World's Most Beautiful Destinations
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300 md:text-xl">
            Explore breathtaking landscapes, vibrant cultures, and unforgettable
            experiences across all seven continents.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/destinations">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
              >
                Explore Destinations <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-slate-900 hover:text-white text-slate-900 dark:text-white dark:hover:bg-white dark:hover:text-gray-900 shadow-lg"
              >
                Read Travel Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Popular Destinations
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the most visited and loved destinations around the
                world
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 mt-8">
            {popularDestinations.map((destination) => (
              <PopularDestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/destinations">
              <Button
                size="lg"
                variant="outline"
                className="text-white dark:border-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 px-6 py-3 shadow-md"
              >
                View All Destinations <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Continents Section */}
      <section className="w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore by Continent
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover unique experiences and breathtaking destinations across
                all seven continents.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {continents.map((continent) => (
              <Link
                key={continent.name}
                href={`/continents/${continent.slug}`}
                className="group"
              >
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
                      <h3 className="text-xl font-bold text-white">
                        {continent.name}
                      </h3>
                      <p className="text-sm text-white/80">
                        {continent.description}
                      </p>
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Travel Tips & Guides
              </h2>
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
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                View All Tips <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Latest Travel Stories
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Get inspired by our latest travel blogs and plan your next
                adventure.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden transition-all duration-300 transform bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg hover:-translate-y-1"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <CardHeader className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.location || "Global"}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="px-4 pb-4">
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      className="gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="hover:shadow-md transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
              >
                View All Blog Posts <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Travelers Say
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Read testimonials from travelers who have explored the world
                with us
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
      <section className="w-full py-16 md:py-28 lg:py-36">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between items-center">
            {/* LEFT COLUMN: FORM */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-5">
                <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Join Our Newsletter
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
                  Subscribe to receive travel tips, exclusive offers, and
                  inspiration for your next adventure.
                </p>
              </div>

              <form className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto lg:mx-0">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-full rounded-xl px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300"
                >
                  Subscribe
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto lg:mx-0">
                By subscribing, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="underline hover:text-blue-600"
                >
                  Privacy Policy
                </a>{" "}
                and consent to receive updates from our company.
              </p>
            </div>

            {/* RIGHT COLUMN: IMAGE */}
            <div className="w-full">
              <img
                src="/images/bali.webp" // replace with your preferred image
                alt="Newsletter Illustration"
                className="w-full h-[500px] rounded-xl shadow-md dark:shadow-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-28 lg:py-36 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Why Choose Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              We provide authentic travel experiences and expert guidance for
              your next adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            <Card className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="space-y-2">
                <Globe className="h-10 w-10 text-blue-500" />
                <CardTitle className="text-xl font-semibold">
                  Global Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Our team of experienced travelers has explored destinations
                  across all seven continents.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="space-y-2">
                <Users className="h-10 w-10 text-blue-500" />
                <CardTitle className="text-xl font-semibold">
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Join a community of passionate travelers sharing authentic
                  experiences and tips.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="space-y-2">
                <MapPin className="h-10 w-10 text-blue-500" />
                <CardTitle className="text-xl font-semibold">
                  Curated Destinations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Discover hidden gems and iconic landmarks carefully selected
                  by our travel experts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const continents = [
  {
    name: "Africa",
    slug: "africa",
    description: "Experience diverse wildlife and vibrant cultures",
    image: "/images/africa.jpg",
  },
  {
    name: "Asia",
    slug: "asia",
    description: "Ancient traditions meet modern innovation",
    image: "/images/asia.webp",
  },
  {
    name: "Europe",
    slug: "europe",
    description: "Historic cities and picturesque landscapes",
    image: "/images/europe.jpeg",
  },
  {
    name: "North America",
    slug: "north-america",
    description: "Natural wonders and cosmopolitan cities",
    image: "/images/north-america.jpg",
  },
  {
    name: "South America",
    slug: "south-america",
    description: "Rainforests, mountains, and vibrant culture",
    image: "/images/south-america.jpg",
  },
  {
    name: "Australia & Oceania",
    slug: "australia-oceania",
    description: "Island paradises and unique wildlife",
    image: "/images/australia.jpg",
  },
  {
    name: "Antarctica",
    slug: "antarctica",
    description: "Earth's final frontier of pristine wilderness",
    image: "/images/antractica.jpg",
  },
];

const popularDestinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    slug: "santorini-greece",
    description:
      "Famous for its stunning sunsets, white-washed buildings, and blue domes",
    image: "/images/greece.webp",
    rating: 4.9,
    continent: "Europe",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    slug: "bali-indonesia",
    description:
      "A paradise island known for beaches, temples, and lush rice terraces",
    image: "/images/bali.webp",
    rating: 4.8,
    continent: "Asia",
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    slug: "machu-picchu-peru",
    description: "Ancient Incan citadel set high in the Andes Mountains",
    image: "/images/machu-pichu.jpg",
    rating: 4.9,
    continent: "South America",
  },
  {
    "id": 4,
    "name": "Maldives",
    "slug": "maldives",
    "description": "Tropical paradise known for its crystal-clear waters, luxury resorts, and vibrant coral reefs",
    "image": "/images/maldives.jpg",
    "rating": 4.8,
    "continent": "Asia"
  },
  {
    "id": 5,
    "name": "Ha Long Bay, Vietnam",
    "slug": "ha-long-bay-vietnam",
    "description": "Scenic bay with thousands of limestone islands and emerald waters",
    "image": "/images/ha-long-bay.jpg",
    "rating": 4.7,
    "continent": "Asia"
  },
  {
    "id": 6,
    "name": "Grand Canyon, USA",
    "slug": "grand-canyon-usa",
    "description": "Iconic canyon carved by the Colorado River, offering breathtaking views and hiking trails",
    "image": "/images/grand-canyon.avif",
    "rating": 4.9,
    "continent": "North America"
  },
  {
    "id": 7,
    "name": "Paris, France",
    "slug": "paris-france",
    "description": "Romantic city known for its iconic landmarks, rich history, and world-class cuisine",
    "image": "/images/paris.avif",
    "rating": 5.0,
    "continent": "Europe"
  },
  {
    "id": 8,
    "name": "Rome, Italy",
    "slug": "italy",
    "description": "Country of timeless beauty, rich culture, and breathtaking landscapes, from Rome to Venice",
    "image": "/images/italy.avif",
    "rating": 4.9,
    "continent": "Europe"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/sarah.jpg",
    rating: 5,
    text: "The travel guides were incredibly detailed and helped me discover hidden gems I would have never found on my own. Highly recommend!",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Sydney, Australia",
    image: "/images/jon.jpg",
    rating: 5,
    text: "I've planned three trips using this website and each one was better than the last. The continent guides are especially helpful.",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    location: "Madrid, Spain",
    image: "/images/maria.jpg",
    rating: 4,
    text: "The blog posts inspired me to visit places I'd never considered before. My trip to Southeast Asia was unforgettable thanks to these recommendations.",
  },
];

const travelTips = [
  {
    id: 1,
    title: "Packing Essentials for Any Trip",
    slug: "packing-essentials",
    excerpt:
      "Learn how to pack efficiently for any destination with our comprehensive guide.",
    image: "/images/tips1.jpg",
    category: "Travel Planning",
  },
  {
    id: 2,
    title: "Budget Travel: How to See the World for Less",
    slug: "budget-travel-guide",
    excerpt:
      "Discover money-saving tips and tricks to make your travel dreams a reality without breaking the bank.",
    image: "/images/tips2.png",
    category: "Budget Travel",
  },
  {
    id: 3,
    title: "Solo Travel Safety Tips",
    slug: "solo-travel-safety",
    excerpt:
      "Essential safety advice for solo travelers to ensure a worry-free and enjoyable journey.",
    image: "/images/tips3.jpeg",
    category: "Solo Travel",
  },
];

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Award, Heart, Mail, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About World Tourism</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Connecting travelers with extraordinary destinations since 2010
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            World Tourism began with a simple idea: to create a platform where travelers could find authentic
            information about destinations around the globe. Founded by a group of passionate travelers in 2010, we've
            grown from a small blog to a comprehensive travel resource used by millions of people worldwide.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Our mission is to inspire and empower people to explore the world, experience different cultures, and create
            lasting memories. We believe that travel has the power to transform lives, broaden perspectives, and foster
            global understanding.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Today, our team consists of travel experts from all seven continents, working together to provide you with
            the most accurate, up-to-date, and inspiring travel content.
          </p>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Our team exploring the world"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6 text-center">
              <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Authenticity</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We provide honest, unbiased information about destinations and travel experiences.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We foster a global community of travelers who share experiences and support each other.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We strive for excellence in all our content, recommendations, and services.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We promote responsible and sustainable travel practices to protect our planet.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.social.map((social) => (
                    <Link key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        {social.platform === "twitter" && <span className="text-blue-400">𝕏</span>}
                        {social.platform === "linkedin" && <span className="text-blue-600">in</span>}
                        {social.platform === "instagram" && <span className="text-pink-600">📷</span>}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 mb-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Have questions, feedback, or want to collaborate with us? We'd love to hear from you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>123 Travel Street, Global City</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>info@worldtourism.com</span>
              </div>
            </div>
          </div>
          <div>
            <Link href="/contact">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const teamMembers = [
  {
    id: 1,
    name: "Emma Rodriguez",
    role: "Founder & CEO",
    bio: "Travel enthusiast with over 15 years of experience exploring 70+ countries across all continents.",
    image: "/placeholder.svg?height=300&width=300",
    social: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "instagram", url: "https://instagram.com" },
    ],
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Content",
    bio: "Former travel journalist with a passion for storytelling and discovering hidden gems around the world.",
    image: "/placeholder.svg?height=300&width=300",
    social: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    id: 3,
    name: "Sophia Patel",
    role: "Travel Expert - Asia",
    bio: "Born in India and traveled extensively throughout Asia, specializing in cultural and culinary experiences.",
    image: "/placeholder.svg?height=300&width=300",
    social: [
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
]


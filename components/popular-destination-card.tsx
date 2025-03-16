import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface PopularDestinationProps {
  destination: {
    id: number
    name: string
    slug: string
    description: string
    image: string
    rating: number
    continent: string
  }
}

export default function PopularDestinationCard({ destination }: PopularDestinationProps) {
  return (
    <Link href={`/destinations/${destination.slug}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
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
  )
}


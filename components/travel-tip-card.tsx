import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TravelTipProps {
  tip: {
    id: number
    title: string
    slug: string
    excerpt: string
    image: string
    category: string
  }
}

export default function TravelTipCard({ tip }: TravelTipProps) {
  return (
    <Link href={`/travel-tips/${tip.slug}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={tip.image || "/placeholder.svg"}
            alt={tip.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">
            {tip.category}
          </Badge>
          <h3 className="text-lg font-bold">{tip.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">{tip.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}


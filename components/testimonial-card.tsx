import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialProps {
  testimonial: {
    id: number
    name: string
    location: string
    image: string
    rating: number
    text: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.text}"</p>
      </CardContent>
    </Card>
  )
}


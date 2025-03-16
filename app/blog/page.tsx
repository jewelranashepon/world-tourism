import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { prisma } from "@/lib/prisma"

export default async function BlogPage() {
  // Fetch all published blog posts
  const blogPosts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
      tags: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  // Get unique continents from blog posts
  const continents = Array.from(new Set(blogPosts.map((post) => post.continent).filter(Boolean) as string[])).map(
    (name) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
    }),
  )

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Travel Blog</h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover travel tips, stories, and inspiration from around the world.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="mt-12">
        <TabsList className="flex flex-wrap justify-center gap-2">
          <TabsTrigger value="all">All Posts</TabsTrigger>
          {continents.map((continent) => (
            <TabsTrigger key={continent.slug} value={continent.slug}>
              {continent.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
        {continents.map((continent) => (
          <TabsContent key={continent.slug} value={continent.slug} className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts
                .filter((post) => post.continent === continent.name)
                .map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function BlogPostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.location || "Global"}</span>
        </div>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-gray-500 dark:text-gray-400">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</div>
        <Link href={`/blog/${post.slug}`}>
          <Button variant="ghost">Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}


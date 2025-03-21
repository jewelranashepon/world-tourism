import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Calendar, MapPin, Tag, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Find the blog post data based on the slug
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
      published: true,
    },
    include: {
      author: true,
      tags: true,
    },
  })

  if (!post) {
    notFound()
  }

  // Filter related posts
  const relatedPosts = await prisma.post.findMany({
    where: {
      published: true,
      continent: post.continent,
      id: {
        not: post.id,
      },
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    take: 3,
  })

  // Parse content sections
  let contentSections = []
  try {
    contentSections = JSON.parse(post.content)
  } catch (e) {
    // If content is not JSON, create a simple section
    contentSections = [
      {
        paragraphs: [post.content],
      },
    ]
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
          Blog
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{post.title}</span>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 text-sm">
            {post.location && (
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                <MapPin className="mr-1 h-3 w-3" />
                {post.location}
              </span>
            )}
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100">
              <Calendar className="mr-1 h-3 w-3" />
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt={post.author.name || "Author"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Author</p>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {Math.ceil(post.content.length / 1000)} min read
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
        <Image
          src={post.image || "/placeholder.svg?height=500&width=1200"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        <div className="space-y-8">
          {contentSections.map((section: any, index: number) => (
            <div key={index} className="space-y-4">
              {section.heading && <h2 className="text-2xl font-bold">{section.heading}</h2>}
              {section.paragraphs &&
                section.paragraphs.map((paragraph: string, pIndex: number) => (
                  <p key={pIndex} className="text-slate-900 text-lg dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              {section.image && (
                <div className="relative h-[300px] rounded-xl overflow-hidden my-8">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.imageAlt || "Blog post image"}
                    fill
                    className="object-cover"
                  />
                  {section.imageCaption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-sm text-center">
                      {section.imageCaption}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="pt-6 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: any) => (
                  <Link key={tag.id} href={`/blog/tag/${tag.slug}`}>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
                      <Tag className="mr-1 h-3 w-3" />
                      {tag.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="pt-6 border-t">
            <h3 className="text-lg font-medium mb-4">Share this article</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="pt-6 border-t">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt={post.author.name || "Author"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Author</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Travel enthusiast and writer with a passion for exploring new cultures and destinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Sidebar - Related Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Related Articles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {relatedPosts.length > 0 ? (
                relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                    <div className="flex gap-3">
                      <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {new Date(relatedPost.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">No related articles found.</p>
              )}
            </CardContent>
          </Card>

          {/* Sidebar - Newsletter */}
          <Card>
            <CardHeader>
              <CardTitle>Subscribe to Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Get the latest travel tips and stories delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
                  required
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* More Articles */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">More Articles You Might Enjoy</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.length > 0 ? (
            relatedPosts.map((post) => (
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
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.location || "Global"}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 col-span-3 text-center">No related articles found.</p>
          )}
        </div>
      </div>
    </div>
  )
}


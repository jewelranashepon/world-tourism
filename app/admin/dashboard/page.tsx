import Link from "next/link"
import { Edit, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminLayout from "@/components/admin-layout"
import { prisma } from "@/lib/prisma"
import { requireAdmin } from "@/lib/auth"
import { deletePost } from "@/lib/actions"

export default async function AdminDashboardPage() {
  await requireAdmin()

  // Wrap database operations in try/catch to handle potential errors
  let posts = []
  try {
    posts = await prisma.post.findMany({
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
  } catch (error) {
    console.error("Error fetching posts:", error)
    // Continue with empty posts array
  }

  const publishedPosts = posts.filter((post) => post.published)
  const draftPosts = posts.filter((post) => !post.published)

  const continentCounts = posts.reduce(
    (acc, post) => {
      if (post.continent) {
        acc[post.continent] = (acc[post.continent] || 0) + 1
      }
      return acc
    },
    {} as Record<string, number>,
  )

  const mostPopularContinent = Object.entries(continentCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "None"

  const recentPosts = posts.filter((post) => {
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    return new Date(post.createdAt) >= thirtyDaysAgo
  }).length

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <Link href="/admin/posts/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{posts.length}</div>
              <p className="text-xs text-muted-foreground">Across {Object.keys(continentCounts).length} continents</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{recentPosts}</div>
              <p className="text-xs text-muted-foreground">Added in the last 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Most Popular Continent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mostPopularContinent}</div>
              <p className="text-xs text-muted-foreground">Based on post count</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all-posts">
          <TabsList>
            <TabsTrigger value="all-posts">All Posts</TabsTrigger>
            <TabsTrigger value="drafts">Drafts ({draftPosts.length})</TabsTrigger>
            <TabsTrigger value="published">Published ({publishedPosts.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="all-posts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Blog Posts</CardTitle>
                <CardDescription>
                  Manage your blog posts from here. You can edit, delete, or create new posts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {posts.length === 0 ? (
                  <p className="text-center py-4 text-muted-foreground">No posts found. Create your first post!</p>
                ) : (
                  <div className="overflow-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3 text-left font-medium">Title</th>
                          <th className="px-4 py-3 text-left font-medium">Continent</th>
                          <th className="px-4 py-3 text-left font-medium">Date</th>
                          <th className="px-4 py-3 text-left font-medium">Status</th>
                          <th className="px-4 py-3 text-right font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((post) => (
                          <tr key={post.id} className="border-b">
                            <td className="px-4 py-3">{post.title}</td>
                            <td className="px-4 py-3">{post.continent || "N/A"}</td>
                            <td className="px-4 py-3">{new Date(post.createdAt).toLocaleDateString()}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  post.published
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                                }`}
                              >
                                {post.published ? "Published" : "Draft"}
                              </span>
                              {post.featured && (
                                <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                                  Featured
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex justify-end gap-2">
                                <Link
                                  href={{
                                    pathname: `/admin/posts/edit/${post.id}`,
                                    query: {
                                      title: post.title,
                                      slug: post.slug,
                                      excerpt: post.excerpt,
                                      content: post.content,
                                      image: post.image || "",
                                      location: post.location || "",
                                      continent: post.continent || "",
                                      published: post.published.toString(),
                                      featured: post.featured.toString(),
                                      tags: post.tags.map((tag) => tag.name).join(", "),
                                    },
                                  }}
                                >
                                  <Button variant="ghost" size="icon">
                                    <Edit className="h-4 w-4" />
                                    <span className="sr-only">Edit</span>
                                  </Button>
                                </Link>
                                <form action={deletePost}>
                                  <input type="hidden" name="id" value={post.id} />
                                  <Button variant="ghost" size="icon" type="submit">
                                    <Trash className="h-4 w-4" />
                                    <span className="sr-only">Delete</span>
                                  </Button>
                                </form>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="drafts">
            <Card>
              <CardHeader>
                <CardTitle>Draft Posts</CardTitle>
                <CardDescription>These posts are saved but not yet published.</CardDescription>
              </CardHeader>
              <CardContent>
                {draftPosts.length === 0 ? (
                  <p className="text-center py-4 text-muted-foreground">No draft posts found.</p>
                ) : (
                  <div className="overflow-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3 text-left font-medium">Title</th>
                          <th className="px-4 py-3 text-left font-medium">Continent</th>
                          <th className="px-4 py-3 text-left font-medium">Date</th>
                          <th className="px-4 py-3 text-right font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {draftPosts.map((post) => (
                          <tr key={post.id} className="border-b">
                            <td className="px-4 py-3">{post.title}</td>
                            <td className="px-4 py-3">{post.continent || "N/A"}</td>
                            <td className="px-4 py-3">{new Date(post.createdAt).toLocaleDateString()}</td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex justify-end gap-2">
                                <Link
                                  href={{
                                    pathname: `/admin/posts/edit/${post.id}`,
                                    query: {
                                      title: post.title,
                                      slug: post.slug,
                                      excerpt: post.excerpt,
                                      content: post.content,
                                      image: post.image || "",
                                      location: post.location || "",
                                      continent: post.continent || "",
                                      published: post.published.toString(),
                                      featured: post.featured.toString(),
                                      tags: post.tags.map((tag) => tag.name).join(", "),
                                    },
                                  }}
                                >
                                  <Button variant="ghost" size="icon">
                                    <Edit className="h-4 w-4" />
                                    <span className="sr-only">Edit</span>
                                  </Button>
                                </Link>
                                <form action={deletePost}>
                                  <input type="hidden" name="id" value={post.id} />
                                  <Button variant="ghost" size="icon" type="submit">
                                    <Trash className="h-4 w-4" />
                                    <span className="sr-only">Delete</span>
                                  </Button>
                                </form>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="published">
            <Card>
              <CardHeader>
                <CardTitle>Published Posts</CardTitle>
                <CardDescription>These posts are live on your website.</CardDescription>
              </CardHeader>
              <CardContent>
                {publishedPosts.length === 0 ? (
                  <p className="text-center py-4 text-muted-foreground">No published posts found.</p>
                ) : (
                  <div className="overflow-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3 text-left font-medium">Title</th>
                          <th className="px-4 py-3 text-left font-medium">Continent</th>
                          <th className="px-4 py-3 text-left font-medium">Date</th>
                          <th className="px-4 py-3 text-right font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {publishedPosts.map((post) => (
                          <tr key={post.id} className="border-b">
                            <td className="px-4 py-3">{post.title}</td>
                            <td className="px-4 py-3">{post.continent || "N/A"}</td>
                            <td className="px-4 py-3">{new Date(post.createdAt).toLocaleDateString()}</td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex justify-end gap-2">
                                <Link
                                  href={{
                                    pathname: `/admin/posts/edit/${post.id}`,
                                    query: {
                                      title: post.title,
                                      slug: post.slug,
                                      excerpt: post.excerpt,
                                      content: post.content,
                                      image: post.image || "",
                                      location: post.location || "",
                                      continent: post.continent || "",
                                      published: post.published.toString(),
                                      featured: post.featured.toString(),
                                      tags: post.tags.map((tag) => tag.name).join(", "),
                                    },
                                  }}
                                >
                                  <Button variant="ghost" size="icon">
                                    <Edit className="h-4 w-4" />
                                    <span className="sr-only">Edit</span>
                                  </Button>
                                </Link>
                                <form action={deletePost}>
                                  <input type="hidden" name="id" value={post.id} />
                                  <Button variant="ghost" size="icon" type="submit">
                                    <Trash className="h-4 w-4" />
                                    <span className="sr-only">Delete</span>
                                  </Button>
                                </form>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}


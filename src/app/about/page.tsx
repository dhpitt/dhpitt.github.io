// app/blog/page.tsx
import { getAllPosts } from '@/lib/getMarkdownPosts'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">David's thoughts</h1>
      <div className="flex flex-col gap-5">
        {posts.map((post, id) => (
          <Card className="bg-main" key={id}>
            <center>
              <CardTitle>{post.frontmatter.title}</CardTitle>
            </center>
            <CardContent>
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

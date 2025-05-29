// app/blog/[slug]/page.tsx
import SinglePost from '@/components/singlepost'
import { getAllPosts } from '@/lib/getMarkdownPosts'

type Params = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Params) {
  // params.slug is safe to access synchronously here
  return <SinglePost slug={params.slug} />
}
import { getAllPosts, getPostBySlug } from '@/lib/getMarkdownPosts'
import SinglePost from '@/components/singlepost'
import { notFound } from 'next/navigation'
import { Post } from '@/types/post'

type Params = {
  slug: string
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  return <SinglePost post={post} />
}
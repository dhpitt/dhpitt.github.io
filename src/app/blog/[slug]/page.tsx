import { getAllPosts, getPostBySlug } from '@/lib/getMarkdownPosts'
import SinglePost from '@/components/singlepost'
import { notFound } from 'next/navigation'
import { Post } from '@/types/post'


export const dynamic = 'force-static'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params
  const post = await getPostBySlug(awaitedParams.slug)
  if (!post) return notFound()
  return <SinglePost post={post} />
}
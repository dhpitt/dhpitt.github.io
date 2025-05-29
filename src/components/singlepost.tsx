// components/singlepost.tsx
import { getPostBySlug } from '@/lib/getMarkdownPosts'

export default async function SinglePost({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug)

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  )
}

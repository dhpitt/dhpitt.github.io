import { Post } from '@/types/post'

export default function SinglePost({ post }: { post: Post }) {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{post.frontmatter.title}</h1>
      <p className="text-muted-foreground text-sm">{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  )
}

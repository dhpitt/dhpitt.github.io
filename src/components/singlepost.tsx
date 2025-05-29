import { Post } from '@/types/post'

export default function SinglePost({ post }: { post: Post }) {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-2xl font-heading sm:text-4xl">
        {post.frontmatter.title}
      </h1>

      <p className="text-muted-foreground text-lg">
        {post.frontmatter.date}
      </p>
      
      <br>
      </br>

      <div className="font-base"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />
    </article>
  )
}

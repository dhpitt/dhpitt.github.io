import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Post } from '@/types/post'

export default function PostPreview({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="bg-main hover:shadow-sm transition-shadow cursor-pointer">
        <CardTitle className="text-center mt-4">{post.frontmatter.title}</CardTitle>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">{post.frontmatter.date}</p>
          <p className="mt-2">{post.preview}</p>
      </CardContent>
      </Card>
    </Link>
    
  )
}
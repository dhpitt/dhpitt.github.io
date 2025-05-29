import Link from 'next/link'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

type Props = {
  title: string
  date: string
  preview: string
}

export default function PostPreview({ title, date, preview, slug }: 
    { title: string; date: string; preview: string; slug: string }) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="bg-main hover:shadow-sm transition-shadow cursor-pointer">
        <CardTitle className="text-center mt-4">{title}</CardTitle>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">{date}</p>
          <p className="mt-2">{preview}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
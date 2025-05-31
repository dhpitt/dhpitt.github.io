import LINKS from '@/data/links'
import Link from 'next/link'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

export default function Blog() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">A couple favorite things</h1>

      <div className="flex flex-col gap-5">
        {LINKS.map((link, id) => {
          return (
            <Link href={link.url} key={id}>
              <Card className="bg-main hover:translate-x-boxShadowX
              hover:translate-y-boxShadowY hover:shadow-none cursor-pointer">
                <center>
                  <CardTitle>
                    {link.name}
                  </CardTitle>
                </center>
                <center>
                  <CardContent>
                    {link.desc}
                  </CardContent>
                </center>

              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

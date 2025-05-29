import THOUGHTS from '@/data/thoughts'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

export default function Blog() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">David's thoughts. Coming soon...</h1>

      <div className="flex flex-col gap-5">
        {THOUGHTS.map((thought, id) => {
          return (
            
              <Card className="bg-main" key={id}>
                <center>
                  <CardTitle>
                    {thought.name}
                  </CardTitle>
                </center>
                
                <center>
                  <CardContent>
                    {thought.text}
                  </CardContent>
                </center>

              </Card>
          )
        })}
      </div>
    </div>
  )
}

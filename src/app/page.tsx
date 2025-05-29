import Links from '@/components/links'
import {Card, CardTitle, CardHeader, CardContent} from '@/components/ui/card'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">David Pitt</h1>
      <p className="mt-2 text-lg sm:text-xl">All-around cool guy / pro computer user</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Welcome to my website, the #1 place for all things David. 
        </p>

        <p>


        </p>

      <div className=" pt-8">
        <Card className='bg-main'>
        <center>
          <CardTitle>Contact</CardTitle>
        </center>

        <CardContent>
          <p className="mt-8 text-base sm:text-med">
            I check my email way too much. My email is
          </p>
          <center>
            <p className="mt-8 text-lg sm:text-med">
              davidhpitt[at]gmail[dot]com
            </p>
          </center>
          <p className="mt-8 text-base sm:text-med">
            and I'll definitely see it if you send me something. 
          </p>
          
        </CardContent>

        </Card>
      </div>
      
        <br />

      </div>

      <Links />
    </div>
  )
}

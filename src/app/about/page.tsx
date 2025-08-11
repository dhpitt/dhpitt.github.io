export default function About() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">About me</h1>
      <div className="mt-8 text-base sm:text-lg">

      <h2 className="text-2xl font-heading sm:text-2xl">Work</h2>
        <p>
          I work on robot software at <a href="https://www.ultra.tech/"> Ultra</a>. We deploy robots in
          warehouses. 
          Before that I worked for two years in the AI4Science Lab at Caltech, where I developed
          <a href="https://neuraloperator.github.io/dev/index.html"> NeuralOperator</a>, a popular
          open-source library for PDE operator learning in PyTorch. I maintain the library now 
          as an open-source contributor.
          <br/>
          I hope that deploying robots everywhere will make us more capable of producing the stuff people need to live good lives.
        </p>

        <br/>

      <h2 className="text-2xl font-heading sm:text-2xl">Life in general</h2>

        <p>
          I like to be outside in the sun and in the water. I'm happiest when I have the opportunity to
          do an outdoor physical activity every day. In LA this took the form of surfing before work,
          and in New York so far it's been biking and doing yoga in the city's many beautiful public parks. 
        </p>

        <br/>
      
      <h2 className="text-2xl font-heading sm:text-2xl">Social stuff</h2>
        <p>
          I'm happiest when I'm part of a big social community. I like to make new friends
          and especially enjoy bringing people together over a delicious meal. As part of my recent
          move to New York, my goal is to have as many people over for dinner as possible. I have a huge 
          dinner table.
          
        </p>

      </div>
    </div>

    
  )
}

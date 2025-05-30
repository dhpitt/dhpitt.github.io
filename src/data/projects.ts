const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl: string
  liveLink: string
}[] = [
  {
    name: 'NeuralOperator: infinite-dimensional learning',
    description: 'I maintain the open-source library for neural operators,\
                  a special, discretization-agnostic class of ML model with \
                  applications in scientific computing, 3D vision and beyond.',
    liveLink: 'https://neuraloperator.github.io/dev/index.html',
    previewImage: '/ns_vorticity.png',
    repoUrl: 'https://github.com/neuraloperator/neuraloperator',
  },
  {
    name: 'Toy robot arm',
    description: 'I downloaded and built an open-source robot arm as a treat to \
    motivate me to learn about new policy models.',
    liveLink: 'https://github.com/TheRobotStudio/SO-ARM100',
    previewImage: '/lerobot.JPG',
    repoUrl: 'https://github.com/TheRobotStudio/SO-ARM100',
  },
  {
    name: 'InBrief: RAG for environmental impact statements',
    description: 'In summer 2023, when the best OpenAI model had a context of \
                  16k tokens, I built a system to efficiently summarize and search \
                  1-2k+ page documents generated during the NEPA review process.',
    liveLink: 'https://taubmancollege.umich.edu/news/2023/04/12/2023-urban-technology-prototype-grant-awardees-announced/',
    previewImage: '/protogrant.png',
    repoUrl: 'https://github.com/dhpitt/inbrief',
  },
]

export default PROJECTS

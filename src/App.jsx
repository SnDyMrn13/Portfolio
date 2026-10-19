
import Header from './Header.jsx'

import About from './About.jsx'

import Footer from './Footer.jsx'

import Fortune from './Fortune.jsx'

import GitHubLink from './GitHubLink.jsx'

import ProjectCount from './ProjectCount.jsx'

import Hero from './Hero.jsx'

import ProjectCard from './ProjectCard.jsx'

import projects from './projects.js'


function App() {
  return (
    <div className = "container">
      <Header />
      <Hero/>
      
      <About/>
      <ProjectCount/>
      <GitHubLink/>
      <Fortune/>
      {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      <Footer/>
    
    </div>
  )
}

export default App
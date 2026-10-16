
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
      <ProjectCard project={projects[0]}/>
      <ProjectCard project={projects[1]}/>
      <ProjectCard project={projects[2]}/>
      <ProjectCard project={projects[3]}/>
      <ProjectCard project={projects[4]}/>
      <ProjectCard project={projects[5]}/>
      <Footer/>
    
    </div>
  )
}

export default App
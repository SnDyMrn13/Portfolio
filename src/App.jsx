
import Header from './Header.jsx'

import About from './About.jsx'

import ProjectLinks from './ProjectLinks.jsx'



function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


function Fortune(){
 let wisdom =[
    "Fortune favors the Bold.",
    "Have Faith.",
    "Don't count your chickens before they're hatched."
 ] 
 let old = randomNumber(0, wisdom.length - 1)
 return <p>{wisdom[old]}</p>
}

function Footer(){
   let year = new Date().getFullYear()
   return <p>&copy; {year} Cindy Hulitsky</p>

}

function GitHubLink(){
  let url = "https://github.com/SnDyMrn13"
  let label = "Cindy Profile"
  return <a href={url}>{label}</a>
}

function ProjectCount(){
  let projects = [
     "Hello-Bun",
      "buttons-rescue",
      "greeting-card-generator",
      "signup-page",
      "api-tutorial",
      "data-playlist",
      "capstone"
   ]  

    return <p>The number of projects I did in level-2 was: {projects.length},  and my first project in level-2 was: {projects[0]}.</p> 
}

function App() {
  return (
    <div>
      <Header />
      <p>Simple person with new coding skills.</p>
      <About/>
      <ProjectCount/>
      <ProjectLinks/>
      <GitHubLink/>
      <Fortune/>
      <Footer/>
    </div>
  )
}

export default App
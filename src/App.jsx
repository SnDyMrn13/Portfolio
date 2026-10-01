
import Header from './Header.jsx'

import About from './About.jsx'

import ProjectLinks from './ProjectLinks.jsx'

import Footer from './Footer.jsx'

import Fortune from './Fortune.jsx'

import GitHubLink from './GitHubLink.jsx'

import ProjectCount from './ProjectCount.jsx'




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
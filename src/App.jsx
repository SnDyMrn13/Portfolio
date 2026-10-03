
import Header from './Header.jsx'

import About from './About.jsx'

import Footer from './Footer.jsx'

import Fortune from './Fortune.jsx'

import GitHubLink from './GitHubLink.jsx'

import ProjectCount from './ProjectCount.jsx'

import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'

import CapstonePortfolioCard from './CapstonePortfolioCard.jsx'

import ApiTutorialPortfolioCard from './ApiTutorialPortfolioCard.jsx'

import SignUpPagePortfolioCard from './SignUpPagePortfolioCard.jsx'

import GreetingCardGeneratorPortfolioCard from './GreetingCardGeneratorPortfolioCard.jsx'

import Hero from './Hero.jsx'


function App() {
  return (
    <div className = "container">
      <Header />
      <Hero/>
      
      <About/>
      <ProjectCount/>
      <GitHubLink/>
      <Fortune/>
      <GreetingCardGeneratorPortfolioCard/>
      <SignUpPagePortfolioCard/>
      <ApiTutorialPortfolioCard/>
      <DataPlaylistPortfolioCard/>
      <CapstonePortfolioCard/>
      <Footer/>
    </div>
  )
}

export default App
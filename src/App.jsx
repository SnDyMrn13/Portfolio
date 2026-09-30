
import Header from './Header.jsx'

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

function App() {
  return (
    <div>
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <Fortune/>
      <Footer/>
    </div>
  )
}

export default App
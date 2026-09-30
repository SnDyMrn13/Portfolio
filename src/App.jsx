



function Header() {
  return <h1>Ash Ketchum</h1>
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
      <Footer/>
    </div>
  )
}

export default App
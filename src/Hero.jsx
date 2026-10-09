
import {useState} from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'

function Hero() {
  const [sat, setSat] = useState(0)
  const showColor =()=> {
    setSat(0)
  }

  const showBlackAndWhite = () =>{
    setSat(-100)
  }
  const [src, alt] = heroPhoto(250, 100, sat, "Blue Skies")
  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
        <h2>A practical person with new coding skills.</h2>
      </div>
      <p>
        <button onClick={showColor}>Color</button> 
        &nbsp;
        <button onClick={showBlackAndWhite}>Black and White</button>
      </p>  
    </div>
  )
}

export default Hero
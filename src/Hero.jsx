
import {useState} from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'

function Hero() {
  const photos = [
    "photo-1566321343730-237ec35e53f3" ,
    "photo-1768720378059-999f7b02bcca",
    "photo-1597571063304-81f081944ee8"
  ]
  const descriptions = [
    "Blue Skies",
    "Cloud Delight",
    "Towering Clouds"
  ]
 const [index, setIndex] = useState(0)
 const [sat, setSat] = useState(0)
  
  const nextPhoto = () => {
    if (index === photos.length - 1){
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const previousPhoto = () => {
    if (index === 0) {
      setIndex(photos.length - 1)
    } else {
      setIndex(index - 1)
    }
  }
  const showColor =()=> {
    setSat(0)
  }

  const showBlackAndWhite = () =>{
    setSat(-100)
  }
  const [src, alt] = heroPhoto(photos[index] , 250, 100, sat, descriptions[index])

  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
        <h2>A practical person with new coding skills.</h2>
      </div>
      <p className="hero-buttons">
        <button onClick={previousPhoto}>Previous</button>
        <button onClick={nextPhoto}>Next</button>
        <button onClick={showColor}>Color</button> 
        <button onClick={showBlackAndWhite}>Black and White</button>
      </p>  
    </div>
  )
}

export default Hero
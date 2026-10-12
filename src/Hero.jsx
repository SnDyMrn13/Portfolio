
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

  const [settings, setSettings] = useState({ index: 0, sat: 0})

  const nextPhoto = () => {
    if (settings.index === photos.length - 1){
      setSettings({...settings, index: 0})
    } else {
      setSettings({...settings, index: settings.index + 1})
    }
  }

  const previousPhoto = () => {
    if (settings.index === 0) {
      setSettings({...settings, index: photos.length - 1})
    } else {
      setSettings({...settings, index: settings.index - 1})
    }
  }

  const showColor =()=> {
    setSettings({...settings, sat: 0})
  }

  const showBlackAndWhite = () =>{
    setSettings({...settings, sat: -100})
  }
  const {src, alt} = heroPhoto({
    photo: photos[settings.index],
    width: 250,
    height: 100,
    sat: settings.sat,
    description: descriptions[settings.index]
})

  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
        <h2>A practical person with new coding skills.</h2>
      </div>
      <p>Photo {settings.index + 1} of {photos.length} </p>
      <p className="hero-buttons">
        <button onClick={previousPhoto}>Previous Photo</button>
        <button onClick={nextPhoto}>Next Photo</button>
        <button onClick={showColor}>In Color</button> 
        <button onClick={showBlackAndWhite}>In Black and White</button>
      </p>  
    </div>
  )
}

export default Hero
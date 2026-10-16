
import {useState} from 'react'
import heroPhoto from './hero-photo.js'
import PhotoControls from './PhotoControls.jsx'
import './hero.css'


function Hero() {
  const photos = [
    { id: "photo-1566321343730-237ec35e53f3", description:  "Blue Skies"},
    { id: "photo-1768720378059-999f7b02bcca", description:  "Cloud Delight"},
    { id: "photo-1597571063304-81f081944ee8", description:  "Towering Clouds"},

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
  const {id, description} = photos[settings.index]
  
  const {src, alt} = heroPhoto({
    photo: id,
    width: 250,
    height: 100,
    sat: settings.sat,
    description
})

  return (
    <div>
      <div className="hero">
        <img src={src} alt={alt} />
        <h2>A practical person with new coding skills.</h2>
      </div>
      <p>Photo{settings.index + 1} of {photos.length} </p>
      <PhotoControls
       onPrevious={previousPhoto}
       onNext={nextPhoto}
       onColor={showColor}
       onBlackAndWhite={showBlackAndWhite}
      /> 
    </div>
  )
}

export default Hero
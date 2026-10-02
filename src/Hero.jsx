
import imageUrl from './image-url.js'
import './hero.css'

function Hero() {
  const src = imageUrl(250, 100)
  return (
    <div className="hero">
      <img src={src} alt="Blue Skies" />
    </div>
  )
}

export default Hero
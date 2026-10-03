
import heroPhoto from './hero-photo.js'
import './hero.css'

function Hero() {
  const [src, alt] = heroPhoto(250, 100, "Blue Skies")
  return (
    <div className="hero">
      <img src={src} alt={alt} />
      <h2>A practical person with new coding skills.</h2>
    </div>
  )
}

export default Hero
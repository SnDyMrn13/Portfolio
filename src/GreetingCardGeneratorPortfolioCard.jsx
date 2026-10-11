
import {useState} from 'react'

function GreetingCardGeneratorPortfolioCard() {
  const name = "Greeting Card Generator"
  const description = "A greeting card generator page that tailors a card to the user's inputs."
  let details = "A Mad-Libs project to practice with 'strings', concatenation, and arrays."
  const liveUrl = "https://SnDyMrn13.github.io/greeting-card-generator/"
  const repoUrl = "https://github.com/SnDyMrn13/greeting-card-generator"
  const [likes, setLikes] = useState (0)
  const [open, setOpen] = useState(false)

  const addLike = () => {
    setLikes(likes + 1)
  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  let text = description
  if (open) {
    text = description + "  " + details
  }

  let label = "Show More"
  if (open) {
    label = "Show Less"
  }

  let look = "outline"
  if (open) {
  look = ""
  }

  return (
    <article className="card-azure">
      <h2>{name}</h2>
      <p>{text}</p>
       <button className={look} onClick={toggleOpen}>{label}</button>
      <p>
        <a href={liveUrl} role="button">See it live</a> · <a href={repoUrl} className = "outline" role="button">Read the Code</a>
      </p>
        <button onClick={addLike}>Like{likes}</button>
    </article>
  )
}

export default GreetingCardGeneratorPortfolioCard
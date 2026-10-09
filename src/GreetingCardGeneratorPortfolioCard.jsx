
import {useState} from 'react'

function GreetingCardGeneratorPortfolioCard() {
  const name = "Greeting Card Generator"
  const description = "A greeting card generator page that tailors a card to the user's inputs."
  const liveUrl = "https://SnDyMrn13.github.io/greeting-card-generator/"
  const repoUrl = "https://github.com/SnDyMrn13/greeting-card-generator"
   const [likes, setLikes] = useState (0)
   const addLike = () => {
    setLikes(likes + 1)
  }
  return (
    <article className="card-azure">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button">See it live</a> · <a href={repoUrl} className = "outline" role="button">Read the Code</a>
      </p>
        <button onClick={addLike}>Like{likes}</button>
    </article>
  )
}

export default GreetingCardGeneratorPortfolioCard
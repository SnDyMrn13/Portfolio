
import {useState} from 'react'

function ApiTutorialPortfolioCard() {
  const name = "Api Tutorial"
  const description = "A tutorial page about using API. "
  let details = "I built it in Level 2 to show some of what I learned about API."
  const liveUrl = "https://SnDyMrn13.github.io/api-tutorial/"
  const repoUrl = "https://github.com/SnDyMrn13/api-tutorial"
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
    <article className="card-blue">
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

export default ApiTutorialPortfolioCard
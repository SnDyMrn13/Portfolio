
import {useState} from 'react'

function ClickLabPortfolioCard() {
  const name = "Click Lab"
  const description = "Board Games Pop Quiz for board games enthusiasts."
  let details = "To practice click listeners and counter patterns in a fun quiz game."
  const liveUrl = " https://sndymrn13.github.io/click-lab/"
  const repoUrl = "https://github.com/SnDyMrn13/click-lab"
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

export default ClickLabPortfolioCard
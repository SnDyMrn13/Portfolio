
import {useState} from 'react'

function SignUpPagePortfolioCard() {
  const name = "SignUp Page"
  const description = "A signup page for Board Games enthusiasts."
  let details = "A project to practice: input options, links, forms making, and CSS."
  const liveUrl = "https://SnDyMrn13.github.io/signup-page/"
  const repoUrl = "https://github.com/SnDyMrn13/signup-page"
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
    <article className="card-pumpkin">
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

export default SignUpPagePortfolioCard

import {useState} from 'react'
import projects from './projects.js'

function SignUpPagePortfolioCard() {
  const project = projects[1]
  const [likes, setLikes] = useState (0)
  const [open, setOpen] = useState(false)

  const addLike = () => {
    setLikes(likes + 1)
  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  let text = project.description
  if (open) {
    text = project.description + "  " + project.details
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
      <h2>{project.name}</h2>
      <p>{text}</p>
       <button className={look} onClick={toggleOpen}>{label}</button>
      <p>
       <a href={project.liveUrl} role="button">See it live</a> · <a href={project.repoUrl} className = "outline" role="button">Read the Code</a>
      </p>
       <button onClick={addLike}>Like{likes}</button>
    </article>
  )
}

export default SignUpPagePortfolioCard
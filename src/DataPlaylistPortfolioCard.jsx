
import {useState} from 'react'

function DataPlaylistPortfolioCard() {
  const project = {
    name: "Data Playlist",
    description: "A playlist page that loads its songs from my own data API.",
    details: "The project was built to practice with fetching API and using 'await' and 'response'.  Also, making buttons to move forward and backward in an array as well as saving selections.",
    liveUrl: "https://SnDyMrn13.github.io/data-playlist/",
    repoUrl: "https://github.com/SnDyMrn13/data-playlist",
  }
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
    <article className="card-purple">
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

export default DataPlaylistPortfolioCard
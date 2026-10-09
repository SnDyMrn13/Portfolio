
import {useState} from 'react'

function DataPlaylistPortfolioCard() {
  const name = "Data Playlist"
  const description = "A playlist page that loads its songs from my own data API."
  const liveUrl = "https://SnDyMrn13.github.io/data-playlist/"
  const repoUrl = "https://github.com/SnDyMrn13/data-playlist"
   const [likes, setLikes] = useState (0)
   const addLike = () => {
    setLikes(likes + 1)
  }
  return (
    <article className="card-purple">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} role="button">See it live</a> · <a href={repoUrl} className = "outline" role="button">Read the Code</a>
      </p>
        <button onClick={addLike}>Like{likes}</button>
    </article>
  )
}

export default DataPlaylistPortfolioCard

import {useState} from 'react'

function SignUpPagePortfolioCard() {
  const name = "SignUp Page"
  const description = "A signup page for Board Games enthusiasts."
  const liveUrl = "https://SnDyMrn13.github.io/signup-page/"
  const repoUrl = "https://github.com/SnDyMrn13/signup-page"
   const [likes, setLikes] = useState (0)
   const addLike = () => {
    setLikes(likes + 1)
  }
  return (
    <article className="card-pumpkin">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
       <a href={liveUrl} role="button">See it live</a> · <a href={repoUrl} className = "outline" role="button">Read the Code</a>
      </p>
       <button onClick={addLike}>Like{likes}</button>
    </article>
  )
}

export default SignUpPagePortfolioCard
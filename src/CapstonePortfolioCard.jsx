

function CapstonePortfolioCard() {
  const name = "Capstone"
  const description = "An endangered bird list from my own data API."
  const liveUrl = "https://SnDyMrn13.github.io/capstone-level-2/"
  const repoUrl = "https://github.com/SnDyMrn13/capstone-level-2"
  return (
    <article className="card-amber">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
       <a href={liveUrl} role="button">See it live</a> · <a href={repoUrl} className = "outline" role="button">Read the Code</a>
      </p>
    </article>
  )
}

export default CapstonePortfolioCard

function ApiTutorialPortfolioCard() {
  const name = "Api Tutorial"
  const description = "A tutorial page about using API."
  const liveUrl = "https://SnDyMrn13.github.io/api-tutorial/"
  const repoUrl = "https://github.com/SnDyMrn13/api-tutorial"
  return (
    <article className="card-blue">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
       <a href={liveUrl} role="button">See it live</a> · <a href={repoUrl} className = "outline" role="button">Read the Code</a>
      </p>
    </article>
  )
}

export default ApiTutorialPortfolioCard
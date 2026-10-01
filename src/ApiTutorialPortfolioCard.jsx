
function ApiTutorialPortfolioCard() {
  let name = "Api Tutorial"
  let description = "A tutorial page about using API."
  let liveUrl = "https://SnDyMrn13.github.io/api-tutorial/"
  let repoUrl = "https://github.com/SnDyMrn13/api-tutorial"
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={repoUrl}>Read the Code</a>
      </p>
    </article>
  )
}

export default ApiTutorialPortfolioCard
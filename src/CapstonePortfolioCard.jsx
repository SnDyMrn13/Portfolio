

function CapstonePortfolioCard() {
  let name = "Capstone"
  let description = "An endangered bird list from my own data API."
  let liveUrl = "https://SnDyMrn13.github.io/capstone-level-2/"
  let repoUrl = "https://github.com/SnDyMrn13/capstone-level-2"
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

export default CapstonePortfolioCard
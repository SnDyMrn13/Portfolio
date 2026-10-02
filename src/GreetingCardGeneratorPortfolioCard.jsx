
function GreetingCardGeneratorPortfolioCard() {
  let name = "Greeting Card Generator"
  let description = "A greeting card generator page that tailors a card to the user's inputs."
  let liveUrl = "https://SnDyMrn13.github.io/greeting-card-generator/"
  let repoUrl = "https://github.com/SnDyMrn13/greeting-card-generator"
  return (
    <article className="card-azure">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the Code</a>
      </p>
    </article>
  )
}

export default GreetingCardGeneratorPortfolioCard
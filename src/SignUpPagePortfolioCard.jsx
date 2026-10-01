
function SignUpPagePortfolioCard() {
  let name = "SignUp Page"
  let description = "A signup page for Board Games enthusiasts."
  let liveUrl = "https://SnDyMrn13.github.io/signup-page/"
  let repoUrl = "https://github.com/SnDyMrn13/signup-page"
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

export default SignUpPagePortfolioCard
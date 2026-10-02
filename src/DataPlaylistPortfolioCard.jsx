
function DataPlaylistPortfolioCard() {
  let name = "Data Playlist"
  let description = "A playlist page that loads its songs from my own data API."
  let liveUrl = "https://SnDyMrn13.github.io/data-playlist/"
  let repoUrl = "https://github.com/SnDyMrn13/data-playlist"
  return (
    <article className="card-purple">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the Code</a>
      </p>
    </article>
  )
}

export default DataPlaylistPortfolioCard
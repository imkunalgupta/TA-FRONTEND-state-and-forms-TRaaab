function MovieDetails(props) {
  let details = props.details;
  return (
    <>
      <h2>{details.Title}</h2>
      <div className="grid">
        <span>Rated: {details.Rated}</span>
        <span>Released: {details.Released}</span>
        <span>Runtime: {details.Runtime}</span>
        <span>Genre: {details.Genre}</span>
        <span>Director: {details.Director}</span>
        <span>Writer: {details.Writer}</span>
        <span>Language: {details.Language}</span>
        <span>Country: {details.Country}</span>
        <span>Type: {details.Type}</span>
      </div>
      <h2>IMDB</h2>
      <div className="grid">
        <p>Rating: {details.imdbRating}</p>
        <p>Votes: {details.imdbVotes}</p>
        <p>ID: {details.imdbID}</p>
      </div>
      <p>Actors: {details.Actors}</p>
      <p>Plot: {details.Plot}</p>
      <h2>Images</h2>
      <div className="grid">
        <img className="img" src={details.Images} alt="Movie Pic" />
      </div>
    </>
  );
}
export default MovieDetails;

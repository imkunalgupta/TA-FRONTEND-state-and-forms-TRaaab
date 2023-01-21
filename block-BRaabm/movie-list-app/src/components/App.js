import React from 'react';
import data from '../data.json';
import MovieDetails from './MovieDetails';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      name: '',
    };
  }
  handleClick = (name) => {
    this.setState((prevState) => {
      return {
        isClicked: !prevState.isClicked,
        name: name,
      };
    });
  };
  render() {
    let movieDetails;
    if (this.state.name !== '') {
      movieDetails = data.find((movie) => movie.Title === this.state.name);
    } else {
      movieDetails = 'Avatar';
    }
    return (
      <>
        <header>
          <h1>Movie List</h1>
        </header>
        <div className="container">
          <ul className="grid">
            {data.map((movie, i) => (
              <li key={i} className="box">
                <img className="image" src={movie.Images} alt="Movie" />
                <div className="center">
                  <h2>{movie.Title}</h2>
                  <h3>Released: {movie.Released}</h3>
                  <button onClick={() => this.handleClick(movie.Title)}>
                    More Info
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div
            className={
              this.state.isClicked ? 'visible absolute' : 'hidden absolute'
            }
          >
            <span className="span" onClick={() => this.handleClick('')}>
              ❌{' '}
            </span>
            <MovieDetails details={movieDetails} />
          </div>
        </div>
      </>
    );
  }
}
export default App;

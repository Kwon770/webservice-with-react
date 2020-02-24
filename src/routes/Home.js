import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // 비동기 함수 예약어 async > async funcion() / async ()
  // 비동기 동작 대상 await
  // 비동기 수행을 위한 예약어 await. await를 사용하기 위해선 함수 앞에 async 선언
  GetMovies = async () => {
    // Get json by api with axios
    // const moveis = await axios.get("https://yts-proxy.now.sh/list_movies.json");

    // Get json data ( json > data > data > movies)
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    // Short cut
    // this.setState({ movies : movies})
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.GetMovies();
  }

  render() {
    // To short cut apporaching state date, use below code
    // this.state.isLoading
    const { isLoading, movies } = this.state;

    // Deliever Movie parameter data, Get Movie HTML
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;

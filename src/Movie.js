import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// If component donxw't need state, just Use function, not classx
// Html in function or component is JSX, thus we must use className, not class
// Map give two data, item and itemNumber => You can use itemNumber as key to prevent error
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img className="movie__img" src={poster} alt={title} title={title}></img>
      <div className="movie__infor infor">
        <h3 className="infor__title">{title}</h3>
        <h5 className="infor__year">{year}</h5>
      </div>
      <div className="movie__overlay-infor overlay">
        <div className="overlay__title-holder">
          <h3 className="overlay__title">{title}</h3>
          <h5 className="overlay__year">{year}</h5>
        </div>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

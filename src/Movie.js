import "./Movie.css";
import axios from "axios";
import React, { Component } from "react";

class Movie extends Component {
  state = {
    title: "",
    opening_crawl: "",
    director: "",
  };

  componentDidMount() {
    const BASE_URL = "https://swapi.dev/api/films/";
    const URL = BASE_URL + this.props.match.params.movieId;
    axios.get(URL).then((res) => {
      this.setState({
        title: res.data.title,
        opening_crawl: res.data.opening_crawl,
        director: res.data.director,
      });
    });
  }

  render() {
    return (
      <div className="movieContainer">
        <figure>
          <img
            src={"/img/movie_" + this.props.match.params.movieId + ".jpg"}
            alt={this.state.title || "No Data"}
          />
        </figure>
        <h2>Title Of Movie</h2>
        <p>{this.state.title || "No Data"}</p>
        <h2>Opening Crawl</h2>
        <p>{this.state.opening_crawl || "No Data"}</p>
        <h2>Director</h2>
        <p>{this.state.director || "No Data"}</p>
      </div>
    );
  }
}

export default Movie;

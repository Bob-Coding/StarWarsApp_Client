import React, { Component } from "react";
import "./App.css";
import GridList from "./GridList";
import movieList from "./movieList";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    list: movieList,
  };

  filterList = (searchTerm) => {
    const newList = movieList.filter((movie) => {
      if (
        movie.title
          .toLowerCase()
          .split(" ")
          .join("")
          .indexOf(searchTerm.toLowerCase().split(" ").join("")) != -1
      ) {
        return movie;
      }
    });
    this.setState({ list: newList });
  };
  render() {
    return (
      <main>
        <SearchBar
          placeholder="Search for a movie title"
          filterList={this.filterList}
        />
        <GridList movieList={this.state.list} />
      </main>
    );
  }
}

export default App;

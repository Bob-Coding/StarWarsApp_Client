import React, { Component } from "react";
import "./App.css";
import GridList from "./GridList";
import movieList from "./movieList";
import SearchBar from "./SearchBar";
import Movie from "./Movie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

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
      <Router>
        <Switch>
          <Route exact path="/">
            <main>
              <SearchBar
                placeholder="Search for a movie title"
                filterList={this.filterList}
              />
              <GridList movieList={this.state.list} />
              <Link to="/about">
                <h4>About this project</h4>
              </Link>
            </main>
          </Route>
          <Route path="/about">
            <h1>Made By Bob</h1>
          </Route>
          <Route path="/movie/:movieId" component={Movie} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;

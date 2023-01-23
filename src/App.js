import { useState } from "react";
import AddMovie from "./AddMovie/AddMovie";
import "./App.css";
import { moviesData } from "./Data/Data";
import FilterMovie from "./FilterMovie/FilterMovie";
import MovieList from "./MovieList/MovieList";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <h1>
        <i>Movie App</i>
      </h1>
      <FilterMovie search={search} setSearch={setSearch} />
      <AddMovie add={add} />
      <MovieList movies={movies} search={search} />
    </div>
  );
}

export default App;

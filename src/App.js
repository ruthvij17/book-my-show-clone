import "./App.css";
// React-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import SearchPage from "./Pages/SearchPage";

// Pages
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import PlayPage from "./Pages/PlayPage";
import CastPage from "./Pages/CastPage";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movie/:id" element={<MoviePage />}></Route>
      <Route path="/plays" element={<PlayPage />}></Route>
      <Route path="/search/:info" element={<SearchPage />}></Route>
      <Route path="/cast/:id" element={<CastPage />}></Route>
    </Routes>
  );
}

export default App;

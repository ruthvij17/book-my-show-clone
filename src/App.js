import "./App.css";
// React-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import PlayPage from "./Pages/PlayPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movie/:id" element={<MoviePage />}></Route>
      <Route path="/plays" element={<PlayPage />}></Route>
    </Routes>
  );
}

export default App;

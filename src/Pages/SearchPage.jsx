import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
//import NavbarComponent from "../Components/Navbar/NavbarComponent";
import MovieLayout from "../Layouts/MovieLayout";
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";

const SearchPage = () => {
  //const location = useLocation();
  //const { data } = location.state || {};

  const { info } = useParams();
  const [movies, setMovies] = useState([]);
  const [length, setLength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const requestMovies = async () => {
      const getMovies = await axios.get(`/search/movie?query=${info}`);
      setMovies(getMovies.data.results);
      setLength(getMovies.data.results.length);
    };
    requestMovies();
  }, [info]);

  useEffect(() => {
    if (length === 1) navigate(`/movie/${movies.map((movie) => movie.id)}`);
  }, [navigate, length]);
  return (
    <>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Search Results"
          subtitle="Results Based On Your Search"
          posters={movies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieLayout(SearchPage);

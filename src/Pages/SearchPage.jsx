import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieLayout from "../Layouts/MovieLayout";
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";

const SearchPage = () => {
  const { info } = useParams();
  const [movies, setMovies] = useState([]);
  const [length, setLength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const requestMovies = async () => {
      try {
        const getMovies = await axios.get(`/search/movie?query=${info}`);
        setMovies(getMovies.data.results);
        setLength(getMovies.data.results.length);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    requestMovies();
  }, [info]);

  useEffect(() => {
    if (length === 1 && movies.length > 0) {
      navigate(`/movie/${movies[0].id}`);
    }
  }, [navigate, length, movies]);

  return (
    <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
      {movies.length > 0 ? (
        <PosterSlider
          title="Search Results"
          subtitle="Results Based On Your Search"
          posters={movies}
          isDark={false}
        />
      ) : (
        <p className="text-center text-gray-500">
          No results found for your search.
        </p>
      )}
    </div>
  );
};

export default MovieLayout(SearchPage);

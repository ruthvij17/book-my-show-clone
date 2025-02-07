import React, { useEffect, useState, useContext } from "react";
import MovieLayout from "../Layouts/MovieLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/Movie.Context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";
import MovieHero from "../Components/Movie Hero/MovieHero.Component";
import Cast from "../Components/Cast/Cast.Component";

const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieData, castData, similarData, recommendedData] =
          await Promise.all([
            axios.get(`/movie/${id}`),
            axios.get(`/movie/${id}/credits`),
            axios.get(`/movie/${id}/similar`),
            axios.get(`/movie/${id}/recommendations`),
          ]);

        setMovie(movieData.data);
        setCast(castData.data.cast);
        setSimilarMovies(similarData.data.results);
        setRecommendedMovies(recommendedData.data.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id, setMovie]);

  const sharedSliderSettings = {
    infinite: false,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="mx-12 container px-4 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About the Movie
          </h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <FaCcVisa className="w-8 h-8" />
              <div>
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay Card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <FaCcApplePay className="w-8 h-8" />
              <div>
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay Card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 bg-premier-300 p-5 rounded-md">
          <h2 className="text-gray-900 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          <Slider {...sharedSliderSettings}>
            {cast.length > 0 ? (
              cast.map((castData, index) => (
                <Cast
                  image={castData.profile_path}
                  castName={castData.original_name}
                  role={castData.character}
                  id={castData.id}
                  key={index}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">
                No cast information available.
              </p>
            )}
          </Slider>
        </div>

        <PosterSlider
          title="Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
          config={sharedSliderSettings}
        />
        <PosterSlider
          title="BMS Xclusive"
          posters={similarMovies}
          isDark={false}
          config={sharedSliderSettings}
        />
      </div>
    </>
  );
};

export default MovieLayout(MoviePage);

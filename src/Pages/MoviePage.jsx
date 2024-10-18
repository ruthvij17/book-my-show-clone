import React, { useEffect, useState, useContext } from "react";
import MovieLayout from "../Layouts/MovieLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/Movie.Context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";

const MoviePage = (props) => {
  const { title, subtitle, posters, isDark } = props;

  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recomendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=3052f3dd38b04949888d184843802e30}`
      );
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=3052f3dd38b04949888d184843802e30`
      );
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommondedMovies = async () => {
      const getRecommondedMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3052f3dd38b04949888d184843802e30`
      );
      setRecommendedMovies(getRecommondedMovies.data.results);
    };
    requestRecommondedMovies();
  }, [id]);

  useEffect(() => {
    const requireMovie = async () => {
      const getMovieData = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3052f3dd38b04949888d184843802e30`
      );
      setMovie(getMovieData.data);
    };
    requireMovie();
  }, [id]);

  const settingsCast = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
  };
  return (
    <>
      {/* <MovieHero /> */}
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
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
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
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay Card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">{/* Cast and Crew */}</div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          {/* Recommonded Movies */}
          <PosterSlider
            title="Recommonded Movies"
            posters={recomendedMovies}
            isDark={false}
            config={settings}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          {/* Exclusive Movies */}
          <PosterSlider
            title="BMS Xclusive"
            posters={similarMovies}
            isDark={false}
            config={settings}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
      </div>
    </>
  );
};

export default MovieLayout(MoviePage);

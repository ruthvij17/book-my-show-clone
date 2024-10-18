import React, { useEffect, useState } from "react";
import DefaultLayout from "../Layouts/DefaultLayout";

// Components
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCardComponent";
import HeroCarousel from "../Components/HeroCarousel/HeroCarouselComponent";
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";
import axios from "axios";

const HomePage = () => {
  const [recommendedMovies, setrecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3052f3dd38b04949888d184843802e30"
      );
      setrecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=3052f3dd38b04949888d184843802e30"
      );
      setpremierMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  useEffect(() => {
    const requestOnlineStreamMovies = async () => {
      const getOnlineStreamMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3052f3dd38b04949888d184843802e30"
      );
      setonlineStreamEvents(getOnlineStreamMovies.data.results);
    };
    requestOnlineStreamMovies();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommonded Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="rupay"
              className="w-full h-full"
            ></img>
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Grand new release every friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming events"
          subtitle="Online Streaming events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);

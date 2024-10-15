import React, { useState } from "react";
import DefaultLayout from "../Layouts/DefaultLayout";

// Components
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCardComponent";
import HeroCarousel from "../Components/HeroCarousel/HeroCarouselComponent";
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";

const HomePage = () => {
  const [recommendedMovies, setrecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);
  return (
    <>
      <HeroCarousel />
    </>
  );
};

export default DefaultLayout(HomePage);

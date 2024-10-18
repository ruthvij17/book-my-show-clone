import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/PosterComponent";
import { NextArrow } from "../HeroCarousel/ArrowsComponent";
import { PrevArrow } from "../HeroCarousel/ArrowsComponent";
const PosterSlider = (props) => {
  const { posters, title, subtitle, isDark } = props;

  const settings = {
    arrows: true,
    slidesToShow: 5,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      <Slider {...settings}>
        {posters.map((each, index) => (
          <Poster {...each} idDark={isDark} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;

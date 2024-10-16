import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow } from "./ArrowsComponent";
import { PrevArrow } from "./ArrowsComponent";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      genre_ids: [16, 878, 28],
      id: 610150,
      original_language: "ja",
      original_title: "ドラゴンボール超 スーパーヒーロー",
      overview:
        "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
      popularity: 5953.989,
      poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      release_date: "2022-06-11",
      title: "Dragon Ball Super: Super Hero",
      video: false,
      vote_average: 8,
      vote_count: 1426,
    },
    {
      adult: false,
      backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
      popularity: 6731.327,
      poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 346,
    },
    {
      adult: false,
      backdrop_path: "/JZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
      genre_ids: [16, 35, 10751, 14, 10749],
      id: 976573,
      original_language: "en",
      original_title: "Elemental",
      overview:
        "In a city where fire, water, land and air residents live together",
      popularity: 6731.327,
      poster_path: "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 346,
    },
    {
      adult: false,
      backdrop_path: "/hZ1E1qS5ZCmbgHX6Th1RQLFqqCz.jpg",
      genre_ids: [28, 12, 878],
      id: 101,
      original_language: "en",
      original_title: "The Matrix Resurrections",
      overview:
        "In a world where reality is a simulated construct, Neo is drawn back to the Matrix to confront a new threat and discover the truth about his past.",
      popularity: 7890.123,
      poster_path: "/9m6V1zM1uj5gmcwxVzt2c8e1KHK.jpg",
      release_date: "2021-12-22",
      title: "The Matrix Resurrections",
      video: false,
      vote_average: 6.5,
      vote_count: 1500,
    },
    {
      adult: false,
      backdrop_path: "/4j3yZzD9D4j6m6UVqDB9hxVg8xR.jpg",
      genre_ids: [28, 35, 878],
      id: 102,
      original_language: "en",
      original_title: "Free Guy",
      overview:
        "A bank teller discovers he is actually a background character in an open-world video game and decides to become the hero of his own story.",
      popularity: 6453.456,
      poster_path: "/9G9uD8wiZ12xKscB2T9WgA6v2Z.jpg",
      release_date: "2021-08-13",
      title: "Free Guy",
      video: false,
      vote_average: 7.2,
      vote_count: 2300,
    },
  ]);
  const settingsLG = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider>
          {images.map((image) => {
            return (
              <div className="w-full h-56 md:h-80 py-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="Hero banner"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => {
            return (
              <div className="w-full h-96 px-2 py-3">
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="Hero banner"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;

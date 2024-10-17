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
      backdrop_path: "/zn13a7U9eMTJq8sHthe3bCgsVm4.jpg",
      id: 122917,
      title: "The Hobbit: The Battle of the Five Armies",
      original_title: "The Hobbit: The Battle of the Five Armies",
      overview:
        "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
      poster_path: "/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
      media_type: "movie",
      adult: false,
      original_language: "en",
      genre_ids: [28, 12, 14],
      popularity: 159.743,
      release_date: "2014-12-10",
      video: false,
      vote_average: 7.3,
      vote_count: 14148,
    },
    {
      backdrop_path: "/c3OHQncTAnKFhdOTX7D3LTW6son.jpg",
      id: 49026,
      title: "The Dark Knight Rises",
      original_title: "The Dark Knight Rises",
      overview:
        "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
      poster_path: "/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
      media_type: "movie",
      adult: false,
      original_language: "en",
      genre_ids: [28, 80, 18, 53],
      popularity: 128.455,
      release_date: "2012-07-17",
      video: false,
      vote_average: 7.8,
      vote_count: 22550,
    },
    {
      backdrop_path: "/9yepEBnQNcKzWWyHdUiX8Mnqc6U.jpg",
      id: 19426,
      title: "Nights of Cabiria",
      original_title: "Le notti di Cabiria",
      overview:
        "Rome, 1957. A woman, Cabiria, is robbed and left to drown by her boyfriend, Giorgio. Rescued, she resumes her life and tries her best to find happiness in a cynical world. Even when she thinks her struggles are over and she has found happiness and contentment, things may not be what they seem.",
      poster_path: "/xF4oCG3PLNbcrtPZbqB3BtkIbKg.jpg",
      media_type: "movie",
      adult: false,
      original_language: "it",
      genre_ids: [18],
      popularity: 19.771,
      release_date: "1957-10-03",
      video: false,
      vote_average: 8,
      vote_count: 747,
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

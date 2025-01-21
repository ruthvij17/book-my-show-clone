import React, { useEffect, useState } from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const PlayPage = () => {
  const [trailer, setTrailer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const requestTrailer = async () => {
      const getTrailer = await axios.get(`/movie/${id}/videos`);
      setTrailer(getTrailer.data.results);
    };
    requestTrailer();
  }, [id]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <>
      <div className="p-10 slider-container bg-premier-300">
        <h1 className="text-[rgb(55,55,55)] font-extrabold text-3xl mb-2">
          Trailers/Teasers/Clips
        </h1>
        <Slider {...settings}>
          {trailer.map((elem) => {
            return (
              <a
                href={`https://www.youtube.com/watch?v=${elem.key}`}
                target="blank"
              >
                <div className="p-2">
                  <img
                    src={`https://img.youtube.com/vi/${elem.key}/hqdefault.jpg`}
                    alt="Not Available"
                    className="rounded-md"
                  />
                  <h1 className="text-lg font-semibold text-[rgb(55,55,55)]">
                    {elem.name}
                  </h1>
                </div>
              </a>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default DefaultLayout(PlayPage);

import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/Movie.Context";
import MovieInfo from "./MovieInfo.Component";
import PaymentModel from "../PaymentModel/Payment.Component";
import { Link } from "react-router-dom";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };

  const genres = movie.genres?.map(({ name }) => name).join(", ");
  return (
    <>
      <div>
        {/* Mobile */}
        <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="cover poster"
            className="m-4 rounded-md"
            style={{ width: "calc(100%-2rem" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>{Math.round(movie.vote_count / 1000)}K</h4>
              <h4>Kannada, English, Hindhi</h4>
              <h4>
                {Math.floor(movie.runtime / 60)}Hrs {movie.runtime % 60}Mins |{" "}
                {genres}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md: w-screen text-xl px-4">
            <button
              className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
              onClick={rentMovie}
            >
              Rent ₹ 149
            </button>
            <button
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
              onClick={buyMovie}
            >
              Buy ₹ 599
            </button>
            <Link to={`/plays/${movie.id}`}>
              <button className="bg-red-600 w-60 py-3 text-white font-semibold rounded-lg">
                Watch trailer
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="relative hidden w-full lg:block"
        style={{ height: "30rem" }}
      >
        {/* Large screen */}
        <div
          className="absolute z-10 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgb(34,34,34)24.95%,rgb(34,34,34)38.8% , rgba(34,34,34,0.04)97.47%, rgba(34,34,34,0)100%)",
          }}
        >
          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className="w-64 h-96">
              <img
                src={`https://tmdb.org/t/p/original${movie.poster_path}`}
                alt="poster movie"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div>
              <MovieInfo movie={movie} />
            </div>
          </div>
        </div>
        <img
          src={`https://tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="Movie Backdrop poster"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
};

export default MovieHero;

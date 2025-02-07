import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/Movie.Context";
import PaymentModel from "../PaymentModel/Payment.Component";
import { Link } from "react-router-dom";

const MovieInfo = () => {
  const { movie } = useContext(MovieContext);

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <>
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 px-4 my-3">
          <h1 className="text-white font-extrabold text-5xl">
            {movie.original_title}
          </h1>
          <div className="text-white flex flex-col gap-2 md:px-4">
            <h4>{Math.round(movie.vote_count / 1000)}K Ratings</h4>
            <h4>Kannada, English, Hindhi</h4>
            <h4>
              {Math.floor(movie.runtime / 60)}Hrs {movie.runtime % 60}Mins |{" "}
              {genres}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button
            className="bg-red-500 w-60 py-3 text-white font-semibold rounded-lg"
            onClick={rentMovie}
          >
            Rent ₹ 149
          </button>
          <button
            className="bg-red-600 w-60 py-3 text-white font-semibold rounded-lg"
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
    </>
  );
};

export default MovieInfo;

import React, { useContext, useState } from "react";
import { FaJoint } from "react-icons/fa";
import { MovieContext } from "../../context/Movie.Context";

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
      {/* <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} /> */}
      <div className="flex flex-col gap-3 lg:hidden">
        <div className="flex flex-col-reverse gap-3 px-4 my-3">
          <div className="text-black flex flex-col gap-2 md:px-4">
            <h4>5K rating</h4>
            <h4>Kannada, English, Hindhi</h4>
            <h4>
              {movie.runtime} min | {genres}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-3 md:px-4 md: w-screen text-xl px-4">
          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
            Rent ₹ 149
          </button>
          <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">
            Buy ₹ 599
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;

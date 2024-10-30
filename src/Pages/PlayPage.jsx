import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";

//Components
import Poster from "../Components/Poster/PosterComponent";
import PlayFilters from "../Components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in Bangalore</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So rude of me By sweets"
                subtitle="comedy shows | English, Kannada | 18+ years | 2h 40 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So rude of me By sweets"
                subtitle="comedy shows | English, Kannada | 18+ years | 2h 40 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So rude of me By sweets"
                subtitle="comedy shows | English, Kannada | 18+ years | 2h 40 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So rude of me By sweets"
                subtitle="comedy shows | English, Kannada | 18+ years | 2h 40 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So rude of me By sweets"
                subtitle="comedy shows | English, Kannada | 18+ years | 2h 40 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src=""
                title="So rude of me By sweets"
                subtitle="comedy shows | English, Kannada | 18+ years | 2h 40 mins"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4 "> Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilters title="Date" tags={["English", "Kannada", "Hindhi"]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout(PlayPage);

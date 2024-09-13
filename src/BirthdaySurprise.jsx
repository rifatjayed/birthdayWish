import React from "react";
import { Link } from "react-router-dom";

const BirthdaySurprise = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-violet-600 text-2xl md:text-4xl font-bold mb-4 text-center">
        Hey Priyotoma!!! 💖🎉
      </h1>
      <Link to="/surprice">
        <button className="bg-violet-600 px-5 py-3 text-white font-semibold text-lg md:text-xl rounded-md">
          Click
        </button>
      </Link>
    </div>
  );
};

export default BirthdaySurprise;

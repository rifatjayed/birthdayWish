import React from "react";
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="text-center">
        <h1 className="text-violet-600 text-2xl font-bold">Really?</h1>
        <h2 className="text-violet-600 text-xl mb-2">
          if really love then click next button
        </h2>
        <Link to="/lastpage">
          <button className="bg-violet-600 px-5 py-3 text-white font-semibold text-lg md:text-xl rounded-md">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page3;

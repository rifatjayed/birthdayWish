import React from "react";
import { Link } from "react-router-dom";

const Surprice = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h2 className="text-violet-600 text-2xl	font-bold mb-2">
        Do You Love me???
      </h2>
      <div className="flex">
        <Link to="/page3">
          <button className="bg-violet-600	px-8 py-2 text-white	font-semibold	text-lg mr-2	">
            Yes
          </button>
        </Link>

        <Link to="/no">
          <button className="bg-red-600		px-8 py-2 text-white	font-semibold	text-lg	">
            No
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Surprice;

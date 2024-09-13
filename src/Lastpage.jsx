import React, { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import img from "./assets/imggggg.jpg";

const Lastpage = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const handleClick = () => {
    setIsRevealed(true);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-pink-200 to-purple-300 px-4">
        {!isRevealed ? (
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -10, 0] }} // Bouncing effect
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            Click to Reveal
          </motion.button>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Fade-in effect
          >
            <Confetti />
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-purple-700"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }} // Heartbeat effect
            >
              Happy Birthday Mohona!
            </motion.h1>
            <p className=" text-purple-700 mt-4 text-lg md:text-xl px-4">
              I don't even know where to begin, but I want to start by saying I
              love you more than words could ever express. I know you dont love
              me You are not addicted to me Instead, you are angry with me. You
              have no idea how special and dear you are to me.
            </p>
            <h2 className="text-purple-700 text-2xl md:text-5xl font-bold mt-2">
              Take love
              <p className="mt-2">&#128151;</p>
            </h2>
            <div className="w-52	h-52 ">
              <img className="	items-center justify-center" src={img} alt="" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Lastpage;

import { div } from "framer-motion/client";
import React, { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const Lastpage = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const handleClick = () => {
    setIsRevealed(true);
  };
  return (
    // <div>
    //   <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-200 to-purple-300">
    //     {!isRevealed ? (
    //       <motion.button
    //         className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
    //         onClick={handleClick}
    //         whileHover={{ scale: 1.1 }}
    //         whileTap={{ scale: 0.9 }}
    //         animate={{ y: [0, -10, 0] }} // Bouncing effect
    //         transition={{ duration: 0.5, repeat: Infinity }}
    //       >
    //         Click to Reveal
    //       </motion.button>
    //     ) : (
    //       <motion.div
    //         className="text-center"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 1 }} // Fade-in effect
    //       >
    //         <Confetti />
    //         <motion.h1
    //           className="text-4xl font-bold text-purple-700"
    //           animate={{ scale: [1, 1.1, 1] }}
    //           transition={{ repeat: Infinity, duration: 1.5 }} // Heartbeat effect
    //         >
    //           Happy Birthday Mohona!
    //         </motion.h1>
    //         <p className="mt-4 text-lg">
    //           I dont even know where to begin, but I want to start by saying I
    //           love You more than words could ever express. You have no idea how
    //           special and dear you are to me.
    //         </p>
    //       </motion.div>
    //     )}
    //   </div>
    // </div>
    // <div>
    //   <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-pink-200 to-purple-300 px-4">
    //     {!isRevealed ? (
    //       <motion.button
    //         className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
    //         onClick={handleClick}
    //         whileHover={{ scale: 1.1 }}
    //         whileTap={{ scale: 0.9 }}
    //         animate={{ y: [0, -10, 0] }} // Bouncing effect
    //         transition={{ duration: 0.5, repeat: Infinity }}
    //       >
    //         Click to Reveal
    //       </motion.button>
    //     ) : (
    //       <motion.div
    //         className="text-center"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 1 }} // Fade-in effect
    //       >
    //         <Confetti />
    //         <motion.h1
    //           className="text-3xl md:text-5xl font-bold text-purple-700"
    //           animate={{ scale: [1, 1.1, 1] }}
    //           transition={{ repeat: Infinity, duration: 1.5 }} // Heartbeat effect
    //         >
    //           Happy Birthday Mohona!
    //         </motion.h1>
    //         <p className="mt-4 text-lg md:text-xl px-4">
    //           I don't even know where to begin, but I want to start by saying I
    //           love you more than words could ever express. You have no idea how
    //           special and dear you are to me.
    //         </p>
    //       </motion.div>
    //     )}
    //   </div>
    // </div>
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
              love you more than words could ever express. You have no idea how
              special and dear you are to me.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Lastpage;

import React, { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  // const [image, setImage] = useState(null);

  const handleClick = () => {
    setIsRevealed(true);
  };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setImage(reader.result);
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <>
      {/* <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
        {!isRevealed ? (
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            onClick={handleClick}
          >
            Click to Reveal
          </button>
        ) : (
          <div className="text-center">
            <Confetti />
            <h1 className="text-4xl font-bold text-purple-700">
              Happy Birthday Mohona!
            </h1>
            <p className="mt-4 text-lg">
              Wishing you a day filled with love and joy!
            </p>
          </div>
        )}
      </div> */}

      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-200 to-purple-300">
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
              className="text-4xl font-bold text-purple-700"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }} // Heartbeat effect
            >
              Happy Birthday Mohona!
            </motion.h1>
            <p className="mt-4 text-lg">
              Wishing you a day filled with love and joy!
            </p>
          </motion.div>
        )}
      </div>

      {/* <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-200 to-purple-300">
        {!isRevealed ? (
          <>
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

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-4 text-center"
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                className="mt-4 rounded-lg shadow-lg w-64 h-64 object-cover"
              />
            )}
          </>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Fade-in effect
          >
            <Confetti />
            <motion.h1
              className="text-4xl font-bold text-purple-700"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }} // Heartbeat effect
            >
              Happy Birthday, [Her Name]!
            </motion.h1>
            <p className="mt-4 text-lg">
              Wishing you a day filled with love and joy!
            </p>
            {image && (
              <img
                src={image}
                alt="Birthday surprise"
                className="mt-4 rounded-lg shadow-lg w-64 h-64 object-cover"
              />
            )}
          </motion.div>
        )}
      </div> */}
    </>
  );
}

export default App;

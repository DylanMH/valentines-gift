import React from "react";
import { motion } from "framer-motion";
import "../App.css";

import FunnyScreenshotImg from "../assets/images/funnyscreenshot-1.png";
import FunnyScreenshotImg2 from "../assets/images/funnyscreenshot-2.png";
import FunnyScreenshotImg3 from "../assets/images/funnyscreenshot-3.png";

const FunnyScreenshot = ({ style }) => {
  const translateY = -100;
  const rotationAngle = (Math.random() - 0.5) * 2 * 360;

  return (
    <div>
      <motion.img
        // map through the 3 images and randomly select one
        src={
          [FunnyScreenshotImg, FunnyScreenshotImg2, FunnyScreenshotImg3][
            Math.floor(Math.random() * 3)
          ]
        }
        style={style}
        initial={{
          scale: 0.6, // Start small
          opacity: 0, // Start fully transparent
          translateY: 0,
        }}
        animate={{
          scale: [0.6, 0.3], // Scale up, then get bigger
          opacity: [0, 1, 1, 0], // Fade in, then fade out
          translateY: translateY,
          rotate: rotationAngle,
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.1, 0.9, 1], // Defines when each animation state should be reached
        }}
        className="funny-screenshot"
      ></motion.img>
    </div>
  );
};

export default FunnyScreenshot;

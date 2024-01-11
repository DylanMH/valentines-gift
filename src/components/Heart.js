import React from "react";
import { motion } from "framer-motion";
import "../App.css";

import HeartImg from "../assets/images/heart.png";

const Heart = ({ style, y, color }) => {
	const rotationAngle = (Math.random() - 0.5) * 2 * 360;
	const hueRotation = color === "green" ? 0 : Math.random() * 360;

	return (
		<div>
			<motion.img
				src={HeartImg}
				style={{ ...style, filter: `hue-rotate(${hueRotation}deg)` }}
				initial={{
					scale: 0.1, // Start small
					opacity: 0, // Start fully transparent
					rotate: 0,
					translateY: 0,
				}}
				animate={{
					scale: [0.1, Math.random() * 0.3, 0.5], // Scale up, then get bigger
					opacity: [0, 1, 0], // Fade in, then fade out
					rotate: rotationAngle,
					translateY: y,
				}}
				transition={{
					duration: 6,
					ease: "easeInOut",
					delay: Math.random() * 1,
					times: [0, 1, 1], // Defines when each animation state should be reached
				}}
				className="heart"
			></motion.img>
		</div>
	);
};

export default Heart;

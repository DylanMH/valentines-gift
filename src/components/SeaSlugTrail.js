import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import seaSlugImage from "../assets/images/seaslug2.png";

import compliments from "../constants/compliments"; // Your array of compliments

const SeaSlugTrail = ({
	screenWidth,
	crawlSpeed,
	wordRevealSpeed,
	avgCharWidth,
}) => {
	const [currentComplimentIndex, setCurrentComplimentIndex] = useState(0);
	const [revealedWordCount, setRevealedWordCount] = useState(0);
	const [slugPosition, setSlugPosition] = useState(0);
	const [isReading, setIsReading] = useState(false);

	useEffect(() => {
		const currentCompliment = compliments[currentComplimentIndex].compliment;
		const words = currentCompliment.split(" ");
		const maxSlugPosition = currentCompliment.length * avgCharWidth; // Approximate pixel width

		const interval = setInterval(() => {
			if (!isReading) {
				setSlugPosition(slugPosition + crawlSpeed); // Move the slug

				// Ensure all words are revealed before transitioning
				const newRevealedWordCount = Math.min(
					Math.floor(slugPosition / wordRevealSpeed),
					words.length
				);
				setRevealedWordCount(newRevealedWordCount);

				if (
					slugPosition > maxSlugPosition &&
					newRevealedWordCount >= words.length
				) {
					// Stop and prepare for next compliment
					setIsReading(true);
					setTimeout(() => {
						setIsReading(false);
						setSlugPosition(0);
						setRevealedWordCount(0);
						const nextIndex = (currentComplimentIndex + 1) % compliments.length;
						setCurrentComplimentIndex(nextIndex);
					}, 3000); // Delay before next compliment
				}
			}
		}, 20);

		return () => clearInterval(interval);
	}, [
		currentComplimentIndex,
		revealedWordCount,
		slugPosition,
		isReading,
		screenWidth,
		crawlSpeed,
		wordRevealSpeed,
		avgCharWidth,
	]);

	return (
		<div
			style={{
				width: "100vw",
				height: "50vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "absolute",
			}}
		>
			<motion.img
				src={seaSlugImage}
				alt="Sea Slug"
				animate={{ x: slugPosition }}
				style={{
					position: "absolute",
					height: "auto",
					width: "100px",
					zIndex: 1,
					top: "33%",
				}}
			/>
			<motion.p
				style={{
					position: "relative",
					whiteSpace: "nowrap",
				}}
			>
				{compliments[currentComplimentIndex].compliment
					.split(" ")
					.slice(0, revealedWordCount)
					.join(" ")}
			</motion.p>
		</div>
	);
};

export default SeaSlugTrail;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";

import "../App.css";
import SeaSlugTrail from "../components/SeaSlugTrail";
import Heart from "../components/Heart";
import BigHeart from "../assets/images/bigheart.png";
import Boquet from "../assets/images/chrysanthemumflowers.png";
import lightmylove from "../assets/sounds/lightmylove.mp3";

// images
/* import CloudBackground from "../assets/images/cloud.png"; */

const SlidesPage = () => {
	// Handle logic for heart animation/spawn logic
	const [hearts, setHearts] = useState([]);
	// Set final heart stage to false
	const [showFinalHeart, setShowFinalHeart] = useState(false);
	// variable for dissolve effect
	const [startDissolve, setStartDissolve] = useState(false);
	// Play song
	const [play] = useSound(lightmylove, {
		volume: 0.01,
		soundEnabled: true,
		interrupt: true,
	});

	// play song on load
	useEffect(() => {
		play();
	}, [play]);

	// Interval for generating hearts
	useEffect(() => {
		const heartInterval = setInterval(() => {
			const heartWidthPercentage = 5;
			const newHeart = {
				id: Math.random(),
				style: {
					zIndex: "6",
					top: "-350px",
					left: `${Math.random() * (100 - heartWidthPercentage)}%`, // Random position
					position: "absolute",
				},
			};
			setHearts((currentHearts) => [...currentHearts, newHeart].slice(-50)); // Keep only the last 50 hearts
		}, 1500); // Creates a new heart every "x" ms

		return () => clearInterval(heartInterval);
	}, []);

	const handleAllComplimentsDisplayed = () => {
		setStartDissolve(true); // start the dissolve effect after last compliment is shown
	};

	const handleAnimationEnd = () => {
		setShowFinalHeart(true); // set final heart stage to true
	};

	return (
		<>
			{showFinalHeart ? (
				<div
					className="final-heart-container"
					style={{
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "black",
					}}
				>
					<img
						style={{
							position: "absolute",
							top: "-4%",
							left: "26%",
							zIndex: 0,
							width: "50%",
							height: "auto",
						}}
						src={Boquet}
						alt="Boquet of flowers"
					/>
					<motion.img
						src={BigHeart}
						alt="Big Red Heart"
						style={{ width: "45%", height: "auto" }}
						initial={{ scale: 0 }}
						animate={{
							scale: [1, 1.05, 1],
							transition: {
								duration: 2,
								ease: "easeInOut",
								repeat: Infinity,
								repeatType: "loop",
							},
						}}
					/>
					<h1 style={{ position: "absolute", top: "30%" }}>
						Happy Valentines Day
					</h1>
					<h1 style={{ position: "absolute", top: "35%" }}>I love you!</h1>
					<h1 style={{ position: "absolute" }}>Will you be mine?</h1>
					<p style={{ position: "absolute", top: "55%" }}>- Dylan</p>
				</div>
			) : (
				<div
					className={`slides-background ${
						startDissolve ? "dissolve-effect" : ""
					}`}
					style={{ height: "100vh" }}
					onAnimationEnd={startDissolve ? handleAnimationEnd : undefined}
				>
					<div style={{ width: "100vw", position: "absolute" }}>
						{hearts.map((heart) => (
							<Heart key={heart.id} style={heart.style} y={900} />
						))}
					</div>
					<SeaSlugTrail
						screenWidth={2000}
						crawlSpeed={3}
						wordRevealSpeed={30}
						avgCharWidth={8}
						onAllComplimentsDisplayed={handleAllComplimentsDisplayed}
					/>
				</div>
			)}
		</>
	);
};

export default SlidesPage;

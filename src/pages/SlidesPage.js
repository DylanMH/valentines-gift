import React, { useEffect, useState } from "react";
/* import { motion } from "framer-motion"; */
import useSound from "use-sound";

import "../App.css";
import SeaSlugTrail from "../components/SeaSlugTrail";
import Heart from "../components/Heart";
/* import FunnyScreenshot from "./components/FunnyScreenshot"; */
import lightmylove from "../assets/sounds/lightmylove.mp3";

// images
/* import CloudBackground from "../assets/images/cloud.png"; */

const SlidesPage = () => {
	// Handle logic for heart animation/spawn logic
	const [hearts, setHearts] = useState([]);
	/* 	const [funnyScreenShot, setFunnyScreenShot] = useState([]); */
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
			const newHeart = {
				id: Math.random(),
				style: {
					zIndex: "-3",
					top: "-350px",
					left: `${Math.random() * 90}%`,
					position: "absolute",
				},
			};
			setHearts((currentHearts) => [...currentHearts, newHeart].slice(-50)); // Keep only the last 50 hearts
		}, 1500); // Creates a new heart every "x" ms

		return () => clearInterval(heartInterval);
	}, []);

	// Separate interval for generating screenshots
	/* useEffect(() => {
		const screenshotInterval = setInterval(() => {
			const newScreenShot = {
				id: Math.random(),
				style: {
					top: "50%",
					left: `${Math.random() * 80}%`,
					position: "absolute",
					zIndex: -1,
				},
			};
			setFunnyScreenShot((currentScreenShot) =>
				[...currentScreenShot, newScreenShot].slice(-10)
			); // Keep only the last "x" screenshots
		}, 7000); // Creates a new screenshot every "x" ms

		return () => clearInterval(screenshotInterval);
	}, []); */

	return (
		<>
			<div class="slides-background" style={{ height: "100vh" }}></div>
			<div style={{ width: "100vw", position: "absolute" }}>
				{hearts.map((heart) => (
					<Heart key={heart.id} style={heart.style} y={900} />
				))}
			</div>
			<div
				style={{
					justifyContent: "center",
					alignContent: "center",
					position: "absolute",
					top: "30%",
					left: "29%",
					margin: "auto",
				}}
			>
				<h1
					style={{
						color: "green",
						fontSize: "50px",
					}}
				>
					Happy Valentines Day My Beautiful Riley
				</h1>
			</div>
			<SeaSlugTrail
				screenWidth={2000}
				crawlSpeed={3}
				wordRevealSpeed={30}
				avgCharWidth={8}
			/>
		</>
	);
};

export default SlidesPage;

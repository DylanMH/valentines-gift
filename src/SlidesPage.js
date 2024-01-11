import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";

import SeaSlugTrail from "./components/SeaSlugTrail";
import Heart from "./components/Heart";
/* import FunnyScreenshot from "./components/FunnyScreenshot"; */
import lightmylove from "./assets/sounds/lightmylove.mp3";

// images
import CloudBackground from "./assets/images/cloud.png";

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
		<div style={{ height: "100vh" }}>
			<div style={{ padding: "3rem" }}>
				<h1 style={{ color: "green" }}>
					Happy Valentines Day My Beautiful Riley
				</h1>
				<h3 style={{ color: "pink" }}>
					I know it's not much but this is what I'v been working on :)
				</h3>
			</div>
			<motion.img
				src={CloudBackground}
				style={{
					zIndex: "-1",
					position: "absolute",
					width: "100%",
					top: "-300px",
					height: "800px",
				}}
				initial={{ scale: 1 }}
				animate={{ scale: Math.random() * 0.5 + 0.5 }}
				transition={{
					repeat: Infinity,
					duration: 10,
					ease: "linear",
				}}
			></motion.img>
			<motion.img
				src={CloudBackground}
				style={{
					zIndex: "-2",
					position: "absolute",
					width: "100%",
					top: "-100px",
					height: "500px",
					left: "45%",
				}}
				initial={{ scale: 1 }}
				animate={{ scale: Math.random() * 0.5 + 0.5 }}
				transition={{
					repeat: Infinity,
					duration: 10,
					ease: "linear",
				}}
			></motion.img>
			<motion.img
				src={CloudBackground}
				style={{
					zIndex: "-2",
					position: "absolute",
					width: "100%",
					top: "-200px",
					height: "600px",
					left: "-50%",
				}}
				initial={{ scale: 1 }}
				animate={{ scale: Math.random() * 0.5 + 0.5 }}
				transition={{
					repeat: Infinity,
					duration: 10,
					ease: "linear",
				}}
			></motion.img>
			<div style={{ width: "100vw", position: "absolute" }}>
				{hearts.map((heart) => (
					<Heart key={heart.id} style={heart.style} y={900} />
				))}
			</div>
			{/* <div style={{ width: "100vw" }}>
				{funnyScreenShot.map((screenshot) => (
					<FunnyScreenshot key={screenshot.id} style={screenshot.style} />
				))}
			</div> */}
			<SeaSlugTrail
				screenWidth={2000}
				crawlSpeed={2}
				wordRevealSpeed={20}
				avgCharWidth={7}
			/>
		</div>
	);
};

export default SlidesPage;

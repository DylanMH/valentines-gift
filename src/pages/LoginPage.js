import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
/* import Heart from "../components/Heart.js"; */

const LoginPage = () => {
	// Handle logic for heart animation/spawn logic
	/* 	const [hearts, setHearts] = useState([]); */
	const navigate = useNavigate();

	/* 	useEffect(() => {
		const interval = setInterval(() => {
			const newHeart = {
				id: Math.random(), // Unique ID for key prop
				style: {
					top: `${Math.random() * 30}%`,
					left: `${Math.random() * 60}%`,
					position: "absolute",
				},
			};

			setHearts((currentHearts) => {
				// Add the new heart
				const updatedHearts = [...currentHearts, newHeart];

				// Remove old hearts if necessary
				if (updatedHearts.length > 50) {
					return updatedHearts.slice(1);
				} else {
					return updatedHearts;
				}
			});
		}, 750); // Creates a new heart every 750ms

		return () => clearInterval(interval);
	}, []);
 */
	// Logic for login inputs. Validate user inputs and route user to correct page. Give funny feedback to user if input is invalid.
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (e) => {
		setUsername(e.target.value); // sets the username input to the value of the input
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value); // sets the password input to the value of the input
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!username || !password) {
			alert(
				"Hey beautiful you need to enter your username and password to log in!"
			);
			return;
		} else {
		}
		if (
			username === "chrysanthemum" ||
			(username === "Chrysanthemum" && password === "12799")
		) {
			navigate("/slides");
		} else {
			alert("Invalid Username or Password!");
		}
	};

	return (
		<div class="login-background">
			<br />
			{/* 			{hearts.map((heart) => (
				<Heart key={heart.id} style={heart.style} color={"blue"} y={-200} />
			))} */}
			<div className="login-container">
				<h1 className="login-header">Happy Valentines Day Beautiful</h1>
				<div className="input-container">
					<input
						className="input-styles"
						type="text"
						placeholder="Favorite Flower"
						onChange={handleUsernameChange}
					/>
					<input
						className="input-styles"
						type="password"
						placeholder="Birthday"
						onChange={handlePasswordChange}
					/>
					<button className="login-button" onClick={handleSubmit}>
						LOGIN
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

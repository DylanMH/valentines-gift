import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import SlidesPage from "./SlidesPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/slides" element={<SlidesPage />} />
			</Routes>
		</Router>
	</React.StrictMode>
);

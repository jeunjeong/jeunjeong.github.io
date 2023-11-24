import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./TopBar/top_bar";
import Home from "./Home/Home";
import AboutMe from "./About Me/about_me";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={[<Header />, <Home />, <AboutMe />]} />
			</Routes>
		</div>
	);
}

export default App;

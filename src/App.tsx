import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./TopBar/top_bar";
import Home from "./Home/Home";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={[<Header />, <Home />]} />
			</Routes>
		</div>
	);
}

export default App;

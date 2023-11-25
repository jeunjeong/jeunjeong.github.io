import React from "react";
import * as nav from "./top_bar.styled";

function Header() {
	return (
		<nav.TopBar>
			<nav.Title>은정이의 성장일기</nav.Title>
			<nav.Function>
				<nav.Content>About Me</nav.Content>
				<nav.Content>Skills</nav.Content>
				<nav.Content>Project</nav.Content>
				<nav.Content>Study</nav.Content>
			</nav.Function>
		</nav.TopBar>
	);
}

export default Header;

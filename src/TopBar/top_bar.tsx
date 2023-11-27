import React from "react";
import * as nav from "./top_bar.styled";

interface Section{
	id:string;
	label:string;
}

interface Props{
	sections :Section[];
	onNavClick:(id:string)=>void;
}

const Header:React.FC<Props> = ({sections,onNavClick})=>{
	return (
		<nav.TopBar>
			<nav.Title>은정이의 성장일기</nav.Title>
			<nav.Function>
				{
					sections.map((section)=>(
						<nav.Content onClick={()=>onNavClick(section.id)}>
							{section.label}
						</nav.Content>
					))
				}
				
			</nav.Function>
		</nav.TopBar>
	);
}

export default Header;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
	text-align:center;
	width: 100%;
	background-color: #f4f4f2;
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	border-bottom : 1px solid lightgray;
	padding-top : 6rem;
`;

export const BackgroundImg = styled.img`
	width: 80%;
	margin-bottom: 1rem;
	@media (min-width: 768px) {
		display: flex;
		width: 40%;
	}
`;

export const Contact = styled.div`

`;

export const ContactTitle = styled.div`
	font-size: 2.5rem;
	font-weight:bold;
`;

export const ContactContent = styled.div`
	display: flex;
	font-size: 1.5rem;	
	margin-top: 1rem;
	margin-bottom: 1rem;
	justify-content: center;
	align-items:center;
`;

export const ContactContentInner = styled.div`
	font-size: 1.2rem;
	@media (min-width: 768px) {
		font-size: 1.5rem;
	}
`;

export const StyledLink = styled(Link)`
	font-size: 1.5rem;
	color: black;
	text-decoration: none;
`;

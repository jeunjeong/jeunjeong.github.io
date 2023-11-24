import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 940px;
`;

export const Contact = styled.div`
	text-align: center;
`;

export const ContactTitle = styled.div`
	font-size: 3rem;
`;

export const ContactContent = styled.div`
	display: flex;
	text-align: center;
	font-size: 1.5rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

export const ContactContentInner = styled.div`
	font-size: 1.5rem;
`;

export const StyledLink = styled(Link)`
	font-size: 1.5rem;
	color: black;
	text-decoration: none;
`;

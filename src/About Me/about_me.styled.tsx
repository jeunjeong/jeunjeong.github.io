import styled from "styled-components";

export const MainContainer = styled.div`
	background-color: #f4f4f2;
	padding-top: 1rem;
	text-align: center;
	border-bottom : 1px solid lightgray;
`;

export const Title = styled.div`
	font-size: 3rem;
	font-weight : bold;
	margin-bottom: 3rem;
`;

export const Content = styled.div`
	font-size: 1.5rem;
	margin-top: 1rem;
	margin-bottom:2em;
	
	@media (min-width: 768px) {
		display: flex;
	}
`;

export const Section = styled.div`
	
	flex: 1;
	margin-left:1rem;
	margin-right:1rem;
	margin-bottom: 2rem;
`;

export const ProfileImg = styled.img`
	height: 18rem;
`;

export const ProfileInfo = styled.div`
	margin-top: 0.6rem;
	font-size: 1.1rem;

	@media (min-width: 1200px) {
		margin-left: 100px;
		display: flex;
		font-size: 1.3rem;
	}
`;

export const ProfileTitle = styled.div`
	padding-left: 1rem;
	text-align: left;
	font-size: 1.6rem;
	border-bottom: 1px solid black;
`;

export const ProfileContent = styled.div`
	display: flex;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	text-align: left;
	font-size: 1rem;


	@media (min-width: 1200px) {
		display: flex;
		font-size: 1.3rem;
	}
`;

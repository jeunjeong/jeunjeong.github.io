import styled from "styled-components";

export const MainContainer = styled.div`
	background-color: #bbbfca;
	padding-top: 1rem;
	text-align: center;
`;

export const Title = styled.div`
	font-size: 5rem;
	margin-bottom: 3rem;
`;

export const Content = styled.div`
	font-size: 1.5rem;
	margin-top: 1rem;
	margin-bottom: 1rem;

	@media (min-width: 768px) {
		display: flex;
	}
`;

export const Section1 = styled.div`
	width: 100%;
	margin-left: 3%;
	margin-right: 3%;
	margin-bottom: 1rem;
`;

export const Section2 = styled.div`
	margin-left: 3%;
	margin-right: 3%;
	margin-bottom: 1rem;

	width: 100%;
`;
export const Section3 = styled.div`
	margin-left: 3%;
	margin-right: 3%;
	margin-bottom: 1rem;
	width: 100%;
`;
export const ProfileImg = styled.img`
	height: 18rem;
`;

export const ProfileInfoDiv = styled.div`
	text-align: left;
`;
export const ProfileInfo = styled.div`
	margin-top: 0.6rem;
	font-size: 1.2rem;

	@media (min-width: 1200px) {
		margin-left: 100px;
		display: flex;
		font-size: 1.3rem;
	}
`;

export const ProfileTitle = styled.div`
	margin-top: 1rem;
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

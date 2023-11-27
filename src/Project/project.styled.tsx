import styled from "styled-components";

export const MainContainer = styled.div`
	background-color: #f4f4f2;
	padding-top: 6rem;
	text-align: center;
	border-bottom: 1px solid lightgray;
	position: relative;
`;

export const Title = styled.div`
	font-size: 3rem;
	font-weight: bold;
	margin-bottom: 3rem;
`;

export const Content = styled.div`
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	margin-bottom: 3rem;
	margin-top: 1rem;
	height: 80vh;
	align-items: center; /* 세로 중앙 정렬을 위해 추가 */
`;

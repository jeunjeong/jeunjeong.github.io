import styled from "styled-components";

export const TopBar = styled.div`
	margin: 1rem;
	margin-right: 1rem;
	display: flex;
	justify-content: space-between;
	background-color: #e8ede7;
	border-bottom: 2px solid #012e4a;
	color: #012e4a;
	position: fixed;
	width: 98%;
	z-index: 10;
`;

export const Title = styled.div`
	margin: 1rem;
	font-weight: bold;
	font-size: 2.5rem;
`;

export const Function = styled.div`
	display: flex;
	align-items: center;
`;

export const Content = styled.div`
	font-size: 1.2rem;
	margin-right: 2.5rem;
`;

export const Login = styled.div`
	font-size: 1rem;
	margin-right: 2.5rem;
`;

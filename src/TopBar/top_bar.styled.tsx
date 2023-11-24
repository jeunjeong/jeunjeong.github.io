import styled from "styled-components";

export const TopBar = styled.div`
	justify-content: space-between;
	background-color: #f4f4f2;
	border-bottom: 2px solid #012e4a;
	color: #012e4a;
	position: fixed;
	width: 99%;
	z-index: 10;
	@media (min-width: 768px) {
		display: flex;
	}
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
	margin-right: 2rem;
`;

export const Login = styled.div`
	font-size: 1rem;
	margin-left: 2rem;
	margin-right: 2rem;
`;

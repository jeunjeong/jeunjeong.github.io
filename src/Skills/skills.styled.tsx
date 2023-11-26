import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #f4f4f2;
	padding-top: 6rem;
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
	
	@media (min-width: 768px) {
		display: flex;
	}
`;

export const Section = styled.div`
	flex: 1;
	margin-left:1rem;
	margin-right:1rem;
	margin-bottom: 1rem;    
`;

export const Card = styled.div`
    background-color : white;
    border-radius : 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    margin-bottom : 1.3rem;
    text-align:center;

`

export const MiddleTitle = styled.div`
    padding-top:0.5rem;
    padding-bottom: 0.5rem;
    font-size:1.5rem;
`
export const Item = styled.div`
    display:flex;
    justify-content: center;
    padding : 0.5rem;
`
export const Icons = styled.img`
    height: 1.5rem;
    padding-right : 0.5rem;
`

export const IconsName = styled.div`
    font-size:1.2rem;
`


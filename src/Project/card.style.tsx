import styled from "styled-components";

export const CardContainer = styled.div`

  width: 80%;
  height: 70vh;
  margin: 0 auto; /* 수평 중앙 정렬을 위한 추가 */
  padding: 2rem;
  background-color : white;
  border-radius: 1rem;
  border:2px solid lightgray;
  color: #9CA3AF;
  text-align: justify;
  transition: all 0.3s ease-out;
	@media (max-width: 768px) {
		overflow-y:scroll;
		&::-webkit-scrollbar {
		  display: none;
		}
	}
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  
}
`;

export const CardTitle = styled.div`
	text-align: center;
	font-size: 2rem;
	font-weight: bold;
	color: #1f2937;

	transition: all 0.3s ease-out;
	opacity: var(--active);
`;

export const CardSection = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 768px) {
		transition: all 0.3s ease-out;
		opacity: var(--active);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
`;

export const CardImg = styled.img`
	object-fit: contain;
	flex: 1;
	height: 33rem; /* 이미지의 높이를 33rem으로 고정합니다. */
	width: 90%;
`;

export const CardInner = styled.div`
	flex: 1;
	margin: 1rem;
`;

export const CardMiddleTitle = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	color: black;
	margin-top: 1.5rem;
	margin-bottom: 0.5rem;
`;

export const CardInnerUl = styled.ul`
	padding-left: 1.2rem;
`;
export const CardInnerText = styled.li`
	font-size: 1.3rem;
	line-height: 1.3rem;
	@media (max-width: 768px) {
		font-size: 1rem;
	}
	color: black;
`;

export const ButtonDiv = styled.div`
	bottom: 1rem;
	display: flex;
	justify-content: end;
`;
export const CardButton = styled.button`
	width: 6rem;
	height: 3rem;
	background-color: #f6f693;
	border: none;
	border-radius: 15px;
	margin: 1rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
`;

export const CardButtonDiv = styled.div`
	font-size: 0.8rem;
`;

export const Atag = styled.a`
	text-decoration: none; /* 링크 밑줄 제거 */
	color: inherit; /* 기본 텍스트 색상으로 상속 */
	font-weight: normal; /* 기본 폰트 굵기로 설정 */
`;
const CardFace = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	color: white;
	text-align: center;
	font-weight: bold;
	font-size: 40px;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
`;

export const CardBack = styled(CardFace)`
	transform: rotateY(180deg);
`;

export const CardFront = styled(CardFace)``;

export const CardFlip = styled.div<{ isFlipped: boolean }>`
	width: 100%;
	transition: transform 2s;
	transform-style: preserve-3d;
	position: relative;
	transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "none")};
`;

export const Scene = styled.div`
	width: 100%;
	height: 80vh;
	perspective: 20000px;
`;

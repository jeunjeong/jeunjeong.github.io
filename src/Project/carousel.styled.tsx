import styled, { keyframes } from 'styled-components';

// Keyframes
const cardRotation = keyframes`
  to {
    transform: rotateY(calc(var(--offset) * 50deg)) 
               scaleY(calc(1 + var(--abs-offset) * -0.4))
               translateZ(calc(var(--abs-offset) * -30rem))
               translateX(calc(var(--direction) * -5rem));
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 65%;
  height:70vh;
  perspective: 500px;
  transform-style: preserve-3d;
`;

export const CardContainer = styled.div<{ offset: number; absOffset: number; direction: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(${(props) => props.offset} * 50deg)) 
             scaleY(calc(1 + ${(props) => props.absOffset} * -0.4))
             translateZ(calc(${(props) => props.absOffset} * -30rem))
             translateX(calc(${(props) => props.direction} * -5rem));
  filter: blur(calc(${(props) => props.absOffset} * 0.5rem));
  transition: all 0.3s ease-out;
  animation: ${cardRotation} 0.3s ease-out;
`;

export const Card = styled.div<{ absOffset: number }>`
  width: 70%;
  height: 100%;
  margin: 0 auto; /* 수평 중앙 정렬을 위한 추가 */
  padding: 2rem;
  background-color : white;
  //background-color: hsl(280deg, 40%, calc(100% - ${(props) => props.absOffset} * 50%));
  border-radius: 1rem;
  color: #9CA3AF;
  text-align: justify;
  transition: all 0.3s ease-out;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 0.7em;
    color: #1F2937;
  }

  p, h2 {
    transition: all 0.3s ease-out;
    opacity: var(--active);
    display:flex;    
    @media (max-width: 768px) {
        display:flex;    
        transition: all 0.3s ease-out;
        opacity: var(--active);
        
    }
  }
  img{
    flex : 1;
    width: 40%;
    margin: 1rem;
  }
  div{
    flex : 1;
  }
}
`;
export const Nav = styled.div`
  color: white;
  font-size: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;

  &.left {
    left: 0;
    transform: translateX(-70%) translateY(-50%);
    color: black;
  }

  &.right {
    right: 0;
    transform: translateX(70%) translateY(-50%);
    color: black;
  }
  @media (max-width: 768px) {
    
  font-size: 3rem;
}
`;


export const BodyStyles = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

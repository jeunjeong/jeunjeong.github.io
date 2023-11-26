import React, { useState } from 'react';
import { BodyStyles, CarouselContainer, CardContainer, Card, Nav } from './carousel.styled';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { Content } from './project.styled';

interface CarouselProps {
    children: React.ReactElement[];
  }
  
const MAX_VISIBILITY = 3;


const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState<number>(2);
  const count: number = 3;

  const handleNavClick = (direction: 'left' | 'right'): void => {
    if (direction === 'left') {
      setActive((prevActive) => Math.max(prevActive - 1, 0));
    } else if (direction === 'right') {
      setActive((prevActive) => Math.min(prevActive + 1, count - 1));
    }
  };

  return (
    <>
    <BodyStyles>
      <CarouselContainer>
        {active > 0 && (
          <Nav className='left' onClick={() => handleNavClick('left')}>
            <TiChevronLeftOutline />
          </Nav>
        )}
        {[...Array(count)].map((_, i) => (
          <CardContainer
            key={i}
            offset={active - i}
            absOffset={Math.abs(active - i)}
            direction={Math.sign(active - i)}
          >
            {children && children[i] && (
              <Card absOffset={Math.abs(active - i)}>
                {children[i]}
                </Card>
            )}
          </CardContainer>
        ))}
        {active < count - 1 && (
          <Nav className='right' onClick={() => handleNavClick('right')}>
            <TiChevronRightOutline />
          </Nav>
        )}
      </CarouselContainer>
      </BodyStyles>
    </>
  );
};

export default Carousel;

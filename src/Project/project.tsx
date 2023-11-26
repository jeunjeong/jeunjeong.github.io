import React from "react";
import * as skills from "./project.styled";
import Carousel from './carousel';
import Card from './card';

const CARDS = 3;
const cardContents = [
	{
	  title: '별이삼샵',
	  content: '내용내용',
	  img: 'projectimg/star23shop/poster.png'
	},
	{
	  title: 'Card 2',
	  content: 'This is the content of card 2.',
	  img: 'projectimg/star23shop/poster.png'
	},
	{
	  title: 'Card 3',
	  content: 'This is the content of card 3.',
	  img: 'projectimg/star23shop/poster.png'
	}
  ];
  
  
function Project() {
	return <skills.MainContainer>
		<skills.Title>Project</skills.Title>
		<skills.Content>
		<Carousel>
          {cardContents.map((content, i) => (
            <Card
              key={i}
              title={content.title}
              content={content.content}
			  img = {content.img}
            />
          ))}
        </Carousel>
		</skills.Content>
	</skills.MainContainer>;
}

export default Project;

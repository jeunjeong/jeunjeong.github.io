import React, { FC } from 'react';

interface CardProps {
  title: string;
  content: string;
  img: string;
}

const Card: FC<CardProps> = ({ title, content, img }) => (
  <div className='card'>
    <h2>{title}</h2>
    <p><img src = {img}/> <div>{content}</div></p>
  </div>
);

export default Card;

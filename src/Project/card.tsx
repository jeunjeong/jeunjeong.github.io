import React, { FC } from "react";
import {
	Atag,
	CardContainer,
	CardTitle,
	CardSection,
	CardImg,
	CardInner,
	CardMiddleTitle,
	CardInnerUl,
	CardInnerText,
	ButtonDiv,
	CardButton,
	CardButtonDiv,
} from "./card.style";
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface CardProps {
	title: string;
	contents: string[];
	img: string;
	rolls: string[];
	github: string;
	review: string[][];
}

const Card: FC<CardProps> = ({
	title,
	contents,
	img,
	rolls,
	github,
	review,
}) => (
	<CardContainer>
		<CardTitle>{title}</CardTitle>
		<CardSection>
			<CardImg src={img} />
			<CardInner>
				<CardMiddleTitle>주제 소개</CardMiddleTitle>
				{contents.map((content, i) => (
					<CardInnerUl>
						<CardInnerText>{content}</CardInnerText>
					</CardInnerUl>
				))}
				<CardMiddleTitle>맡은 역할</CardMiddleTitle>
				{rolls.map((roll, i) => (
					<CardInnerUl>
						<CardInnerText>{roll}</CardInnerText>
					</CardInnerUl>
				))}
				<ButtonDiv>
					<Atag href={github}>
						<CardButton>
							<CardButtonDiv>Go to Github&nbsp;</CardButtonDiv>
							<IoIosArrowDroprightCircle />
						</CardButton>
					</Atag>

					<CardButton>
						<CardButtonDiv>Go to Review &nbsp;</CardButtonDiv>
						<IoIosArrowDroprightCircle />
					</CardButton>
				</ButtonDiv>
			</CardInner>
		</CardSection>
	</CardContainer>
);

export default Card;

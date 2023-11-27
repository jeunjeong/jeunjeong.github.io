import React, { FC, useState } from "react";
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
	CardFront,
	CardBack,
	CardFlip,
	Scene,
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
}) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleCardClick = () => {
		setIsFlipped(!isFlipped);
		console.log(isFlipped);
	};
	console.log(title);
	return (
		<div>
			<Scene className="scene scene--card">
				<CardFlip
					className={`card ${isFlipped ? "is-flipped" : ""}`}
					isFlipped={isFlipped}
				>
					<CardFront>
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

										<CardButton
											className={isFlipped ? "is-flipped" : ""}
											onClick={handleCardClick}
										>
											<CardButtonDiv>Go to Review &nbsp;</CardButtonDiv>
											<IoIosArrowDroprightCircle />
										</CardButton>
									</ButtonDiv>
								</CardInner>
							</CardSection>
						</CardContainer>
					</CardFront>
					<CardBack>
						<CardContainer>
							<CardTitle>Review</CardTitle>
							<CardSection>
								<CardInner>
									<CardMiddleTitle>Keep</CardMiddleTitle>
									{review[0].map((paragraphs, i) => (
										<CardInnerText>{paragraphs}</CardInnerText>
									))}

									<CardMiddleTitle>Problem</CardMiddleTitle>
									{review[1].map((paragraphs, i) => (
										<CardInnerText>{paragraphs}</CardInnerText>
									))}
									<CardMiddleTitle>Try</CardMiddleTitle>
									{review[2].map((paragraphs, i) => (
										<CardInnerText>{paragraphs}</CardInnerText>
									))}

									<ButtonDiv>
										<CardButton
											className={isFlipped ? "is-flipped" : ""}
											onClick={handleCardClick}
										>
											<CardButtonDiv>Go to Project &nbsp;</CardButtonDiv>
											<IoIosArrowDroprightCircle />
										</CardButton>
									</ButtonDiv>
								</CardInner>
							</CardSection>
						</CardContainer>
					</CardBack>
				</CardFlip>
			</Scene>
		</div>
	);
};

export default Card;

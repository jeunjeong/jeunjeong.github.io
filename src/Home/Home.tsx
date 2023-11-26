import React from "react";
import * as M from "./home.styled";
import { FaSquarePhone } from "react-icons/fa6";
import { ImMail } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

interface Props {
	id:string;
}

const Home:React.FC<Props> =({id})=> {
	return (
		<M.MainContainer id={id}>
			<M.BackgroundImg src="profile/background.jpg" />
			<M.Contact>
				<M.ContactTitle>Contact Me</M.ContactTitle>
				<M.ContactContent>
					<M.ContactContentInner>
						<FaSquarePhone />
						&nbsp;Phone&nbsp;
					</M.ContactContentInner>
					<M.ContactContentInner>010-2676-0690</M.ContactContentInner>
				</M.ContactContent>
				<M.ContactContent>
					<M.ContactContentInner>
						<ImMail />
						&nbsp;Email&nbsp;
					</M.ContactContentInner>
					<M.ContactContentInner>ejjeongs@naver.com</M.ContactContentInner>
				</M.ContactContent>
				<M.ContactContent>
					<M.ContactContentInner>
						<FaInstagramSquare />
						&nbsp;Instagram&nbsp;
					</M.ContactContentInner>
					<M.ContactContentInner>_e_jjeongs</M.ContactContentInner>
				</M.ContactContent>
				<M.StyledLink to="https://github.com/jeunjeong">
					<M.ContactContent>
						<M.ContactContentInner>
							<FaGithubSquare />
							&nbsp;Github&nbsp;
						</M.ContactContentInner>
						<M.ContactContentInner>
							https://github.com/jeunjeong
						</M.ContactContentInner>
					</M.ContactContent>
				</M.StyledLink>
			</M.Contact>
		</M.MainContainer>
	);
}

export default Home;

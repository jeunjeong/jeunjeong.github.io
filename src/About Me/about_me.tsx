import React from "react";
import * as about from "./about_me.styled";
import { BsPersonFill } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import Progress from "./progress_bar";

function AboutMe() {
	return (
		<about.MainContainer>
			<about.Title>About Me</about.Title>
			<about.Content>
				<about.Section>
					<about.ProfileImg src="profile/profile.jpg" />

						<about.ProfileInfo>
							<BsPersonFill />
							&nbsp;이름 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;조은정 (Jo Eun Jeong)
						</about.ProfileInfo>
						<about.ProfileInfo>
							<FaCalendar />
							&nbsp;생년월일 &nbsp;1999.01.02
						</about.ProfileInfo>
						<about.ProfileInfo>
							<GiPositionMarker />
							&nbsp;주소 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;부산광역시 강서구
						</about.ProfileInfo>
				</about.Section>
				<about.Section>
					<about.ProfileTitle>Education</about.ProfileTitle>
					<about.ProfileContent>
						<IoMdSchool /> 2014.03 ~ 2017.02 성일여자고등학교
					</about.ProfileContent>
					<about.ProfileContent>
						<IoMdSchool /> 2017.03 ~ 2022.02 한국해양대학교 제어계측전공
					</about.ProfileContent>
					<about.ProfileContent>
						<IoMdSchool /> 2023.01 ~ 2023.12 삼성청년SW아카데미 9기
					</about.ProfileContent>
					<about.ProfileTitle>Certificate</about.ProfileTitle>
					<about.ProfileContent>
						<PiCertificateFill /> 2020.12 학부생 연구프로그램 : 우수상 수상
					</about.ProfileContent>
					<about.ProfileContent>
						&nbsp; &nbsp; - 드론 실시간 충돌회피 알고리즘 연구프로그램
					</about.ProfileContent>
				</about.Section>
				<about.Section>
					<about.ProfileTitle>Who Am I?</about.ProfileTitle>
					<about.ProfileContent >
						- 긍 &nbsp; 정
						<Progress progressPercent={80} />
						80%
					</about.ProfileContent>
					<about.ProfileContent>
						- 에너지
						<Progress progressPercent={75} />
						75%
					</about.ProfileContent>
					<about.ProfileContent>
						- 유연함
						<Progress progressPercent={70} />
						70%
					</about.ProfileContent>
					<about.ProfileContent>
						- 책임감
						<Progress progressPercent={95} />
						95%
					</about.ProfileContent>
				</about.Section>
			</about.Content>
		</about.MainContainer>
	);
}

export default AboutMe;

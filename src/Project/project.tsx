import React from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import Card from "./card";
import * as project from "./project.styled";
interface Props {
	id: string;
}

const CARDS = 3;
const cardContents = [
	{
		title: "익명으로 전하지 못했던 진심을 전달해 보세요, 별이삼샵",
		contents: [
			"하고싶은 말이 있지만, 쑥스럽거나 용기가 없어 전달하지 못하는 사람들을 위한 익명 편지 전달 서비스",
			"주위 사람 누구에게도 말하지 못했던 고민들을 털어놓을 수 있는 익명 펜팔 서비스",
		],
		img: "projectimg/star23shop/poster.png",
		rolls: [
			"친구에게 편지 작성 페이지 제작",
			"랜덤 편지 작성 페이지 제작",
			"플러터를 이용한 인앱웹뷰 APK 추출 후 제공",
			"모바일 환경에서 연락처 접근 권한 및 연락처 리스트 가져오기",
		],
		github: "https://github.com/jeunjeong/Anonymous-letter-delivery-service",
		review: [
			[
				"Next.js에 대해 공부해 볼 수 있는 기회가 되었습니다.",
				"SSR, CSR, SSG, ISR 의 페이지 렌더링 방식에 따른 특징에 대해 접할 수 있었습니다.",
				"TypeScript에 대해 공부해 볼 수 있는 기회가 되었습니다.",
				"프로그래밍 언어의 타입 시스템에 대해 접할 수 있었습니다.",
				"JavaScript의 한계점과 그를 극복할 수 있는 TypeScript의 특징, 사용법을 배울 수 있었습니다.",
				"React에서 페이지별로 공통적으로 사용하는 컴포넌트나 레이아웃들을 분할할 수 있었습니다.",
				"use Hook을 통한 파라미터 전달과 같은 부분들을 조금 더 깊이 이해할 수 있었습니다.",
				"플러터를 이용한 Dart 기본 문법에 대해 이해할 수 있었습니다.",
				"인앱웹뷰 라이브러리를 이용한 APK 추출방법과 뒤로가기나 새로고침 등 설정하는 방법에 대해 공부할 수 있었습니다.",
				"연락처 접근 권한을 받아 불러오기/ 이미지 피커와 같은 라이브러리를 이용한 갤러리 선택과 같은 기능들을 사용해 볼 수 있었습니다.",
			],
			[
				"카카오톡 채널 알림을 통해 비회원에게도 편지를 보낼 수 있는 서비스를 기획하였으나 사업자 등록 이슈로 인해 기획이 변경되었습니다.",
				"Three.js 를 도입하였으나 맡은 페이지에는 적용할 수 있는 부분이 없어 접하지 못해 아쉬웠습니다.",
				"안드로이드 버전 이슈로 인해 apk 환경에서는 미디어를 가지고 오는 기능을 구현하지 못했습니다.",
			],
			[
				"대체할 방안으로 카카오 로그인과 채널 알림이 아닌 전화번호 인증 간편 로그인을 구현하였습니다.",
				"추후 코드리뷰를 통해 Three.js의 기본 동작 원리에 대해 공부해보고 싶습니다.",
				"백엔드 부분에서도 MSA나 CI/CD에 사용한 젠킨스와 같은 부분에 있어서도 공부해보고 싶습니다.",
			],
		],
	},
	{
		title: "퍼스널컬러 측정 AI를 이용한 뷰티 통합 플랫폼, Mon Palette",
		contents: [
			"AI를 이용한 사진 분석 퍼스널컬러 측정 서비스",
			"측정된 퍼스널 컬러 기반의 SNS 필터링 서비스",
			"인플루언서는 마켓과 같이 제품을 판매/ 사용자들은 저렴한 가격에 톤에 맞는 구성으로 상품을 구매할 수 있는 쇼핑몰 서비스",
		],
		img: "projectimg/monpalette/gif/check_personal_color.gif",
		rolls: [
			"회원가입 / 로그인 - JWT를 이용한 로그인 구현",
			"메인페이지 - 주요 기능들로 이동횟수가 많지 않도록 고려하여 제공",
			"마이페이지 - 내가 쓴 게시글 확인 및 팔로워/팔로잉 체크 && 사용자의 역할(사용자 / 인플루언서)에 따라 다른 메뉴 UI 제공",
		],
		github: "https://github.com/jeunjeong/Beauty-integrated-platform",
		review: [
			[
				"피그마를 사용해서 와이어프레임을 작성하고 개발을 진행하며 함께 프로젝트를 하면서 같은 느낌을 계속 가져갈 수 있다는 부분을 알게 되었습니다.",
				"약간이나마 AI도 만져볼 수 있는 기회가 되었던 것 같아서 좋습니다.",
				"리액트를 이용해 페이지를 구현하는 방법을 빠르게 몸으로 익힐 수 있었습니다.",
				"use Hook을 사용해 보았습니다.",
				"Recoil을 이용한 상태관리를 해봤습니다.",
				"팀원들과 함께 Git을 이용한 협업을 배울 수 있었습니다.",
				"JIRA를 이용하여 협업을 관리할 수 있게 되었습니다.",
			],
			[
				"리액트를 처음 접했는데 프로젝트 규모로 인해 따로 학습할 시간이 없어서 아쉬웠습니다.",
				"또한 프로젝트 기간에 찾워 개발하느라 완성도가 조금 떨어지는 것 같아 조금 아쉽습니다.",
				"팀장으로서 지속적으로 팀원들의 진행상황과 어려움을 체크하지 못해 개발 일정이 조금 딜레이 되었습니다.",
				"beautyGen 오픈 데이터 셋을 이용해 메이크업 AI 를 구현했는데 생각보다 퀄리티가 좋지 않아서 도입하지 못했습니다.",
			],
			[
				"프로젝트 규모를 결정할 때 프로젝트 기간과 팀원의 숙련도를 잘 고려해서 결정해야 한다는 부분을 배웠습니다. 이후 프로젝트에서는 이 부분에 대해 고려해서 결정하겠습니다.",
				"공통 컴포넌트와 같은 부분들을 분할하고 Props를 관리하는 방법에 대해 조금 더 알아보겠습니다.",
			],
		],
	},
	{
		title: "새 집 입주자들의 걱정을 덜어줄 아파트 사전점검 서비스, 이게MO징?",
		contents: [""],
		img: "projectimg/star23shop/poster.png",
		rolls: [""],
		github: "https://github.com/jeunjeong/-New-home-flaw-finding-service",
		review: [[], [], []],
	},
];
const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
	<TiChevronLeftOutline
		onClick={onClick}
		style={{
			fontSize: "2rem",
			color: "black",
			position: "absolute",
			top: "50%",
			left: "10px",
			transform: "translateY(-50%)",
			cursor: "pointer",
		}}
	/>
);

// 다음 화살표 컴포넌트
const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
	<TiChevronRightOutline
		onClick={onClick}
		style={{
			fontSize: "2rem",
			color: "black",
			position: "absolute",
			top: "50%",
			right: "10px",
			transform: "translateY(-50%)",
			cursor: "pointer",
		}}
	/>
);

const Project: React.FC<Props> = ({ id }) => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	return (
		<project.MainContainer id={id}>
			<project.Title>Project</project.Title>
			<Slider {...settings}>
				{cardContents.map((contents, i) => (
					<project.Content>
						<Card
							key={i}
							title={contents.title}
							contents={contents.contents}
							img={contents.img}
							rolls={contents.rolls}
							github={contents.github}
							review={contents.review}
						/>
					</project.Content>
				))}
			</Slider>
		</project.MainContainer>
	);
};

export default Project;

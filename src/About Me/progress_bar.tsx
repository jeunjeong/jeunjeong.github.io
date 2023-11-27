import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ProgressWrap = styled.div`
	background: #f7db93;
	margin: 0px 5px;
	overflow: hidden;
	position: relative;
	width: 60%;
	height: 15px;
	border-radius: 10px;

	@media (min-width: 1200px) {
		width: 70%;
	}
`;

const ProgressBar = styled.div`
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	background-color: #f69393;
	left: 0;
	position: absolute;
	top: 0;
	height: 100%;
	transition: width 1s ease-in-out;
`;

interface ProgressProps {
	progressPercent: number;
}

const Progress: React.FC<ProgressProps> = ({ progressPercent }) => {
	const [barWidth, setBarWidth] = React.useState(0);
	const progressWrapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (progressWrapRef.current) {
			const getPercent = progressPercent / 100;
			const progressTotal = getPercent * progressWrapRef.current.offsetWidth;
			setBarWidth(progressTotal);
		}
	}, [progressPercent]);

	return (
		<ProgressWrap ref={progressWrapRef}>
			<ProgressBar style={{ width: `${barWidth}px` }} />
		</ProgressWrap>
	);
};

export default Progress;

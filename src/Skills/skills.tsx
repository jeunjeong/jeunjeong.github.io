import React from "react";
import * as skills from "./skills.styled";

function Skills() {
	return <skills.MainContainer>
		<skills.Title>Skills</skills.Title>
		<skills.Content>
			<skills.Section>
				<skills.Card>
					<skills.MiddleTitle> Language </skills.MiddleTitle>
					
					<skills.Item>
						<skills.Icons src="/icons/language/python.png"></skills.Icons>
						<skills.IconsName>Python</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/language/C.png"></skills.Icons>
						<skills.IconsName>C</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/language/C++.png"></skills.Icons>
						<skills.IconsName>C++</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/language/java.png"></skills.Icons>
						<skills.IconsName>Java</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/language/javascript.png"></skills.Icons>
						<skills.IconsName>javascript</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/language/typescript.png"></skills.Icons>
						<skills.IconsName>typescript</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/language/dart.png"></skills.Icons>
						<skills.IconsName>Dart</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/language/matlab.png"></skills.Icons>
						<skills.IconsName>matlab</skills.IconsName>
					</skills.Item>
				</skills.Card>
				
			</skills.Section>
			<skills.Section>
				<skills.Card>
					<skills.MiddleTitle> Frontend </skills.MiddleTitle>
					<skills.Item>
						<skills.Icons src="/icons/frontend/HTML&CSS.png"></skills.Icons>
						<skills.IconsName>HTML&CSS</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/frontend/Vue.png"></skills.Icons>
						<skills.IconsName>Vue</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/frontend/react.png"></skills.Icons>
						<skills.IconsName>React</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/frontend/Next.png"></skills.Icons>
						<skills.IconsName>Next</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/frontend/flutter.png"></skills.Icons>
						<skills.IconsName>flutter</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/frontend/recoil.png"></skills.Icons>
						<skills.IconsName>recoil</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/frontend/axios.png"></skills.Icons>
						<skills.IconsName>axios</skills.IconsName>
					</skills.Item>
				</skills.Card>
				<skills.Card>
					<skills.MiddleTitle> Embedded </skills.MiddleTitle>

					<skills.Item>
						<skills.Icons src="/icons/embedded/ros.png"></skills.Icons>
						<skills.IconsName>ROS</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/embedded/vhdl.png"></skills.Icons>
						<skills.IconsName>VHDL</skills.IconsName>
					</skills.Item>
				</skills.Card>
			</skills.Section>
			<skills.Section>
				<skills.Card>
					<skills.MiddleTitle> Backend </skills.MiddleTitle>
					<skills.Item>
						<skills.Icons src="/icons/backend/spring.png"></skills.Icons>
						<skills.IconsName>Spring</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/backend/springboot.png"></skills.Icons>
						<skills.IconsName>Spring Boot</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/backend/mysql.png"></skills.Icons>
						<skills.IconsName>My SQL</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/backend/ec2.png"></skills.Icons>
						<skills.IconsName>Amazon EC2</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/backend/postman.png"></skills.Icons>
						<skills.IconsName>Postman</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/backend/swagger.png"></skills.Icons>
						<skills.IconsName>Swagger</skills.IconsName>
					</skills.Item>
				</skills.Card>
				<skills.Card>
					<skills.MiddleTitle> Communication </skills.MiddleTitle>
					<skills.Item>
						<skills.Icons src="/icons/communication/git.png"></skills.Icons>
						<skills.IconsName>Git</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/communication/gitlab.png"></skills.Icons>
						<skills.IconsName>GitLab</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/communication/gerrit.png"></skills.Icons>
						<skills.IconsName>Gerrit</skills.IconsName>
					</skills.Item>
					<skills.Item>
						<skills.Icons src="/icons/communication/notion.png"></skills.Icons>
						<skills.IconsName>notion</skills.IconsName>
					</skills.Item>
				</skills.Card>
			</skills.Section>
		</skills.Content>
	</skills.MainContainer>;
}

export default Skills;

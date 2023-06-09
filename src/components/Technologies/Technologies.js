import React from "react";
import { DiCodeBadge, DiFirebase, DiStackoverflow } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Skills = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Skills</SectionTitle>
		<SectionText>
			I have 1.2 years of professional experience in developing full-stack
			web applications, backend services, and a data warehouse.
		</SectionText>
		<List>
			<ListItem>
				<DiCodeBadge size="3rem" />
				<ListContainer>
					<ListTitle>Languages</ListTitle>
					<ListParagraph>
						Go, Javascript, CSS, Typescript, Python, SQL. C++, Java
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Databases</ListTitle>
					<ListParagraph>
						PostgreSQL, Microsoft SQL Server, Google Firestore,
						SQLite
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiStackoverflow size="3rem" />
				<ListContainer>
					<ListTitle>Technologies</ListTitle>
					<ListParagraph>
						React/Redux, Tailwind CSS, Express, Koa, Docker, Git,
						Jira, AWS, Kibana
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Skills;

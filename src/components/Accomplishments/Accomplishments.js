import React, { useEffect, useState } from "react";

import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";
import { data } from "../../constants/constants";
import { getContributions } from "../../libs/githubAPI";

const Accomplishments = () => {
	const [contributions, setContributions] = useState(0);

	useEffect(async () => {
		const gitHubData = await getContributions(
			process.env.NEXT_PUBLIC_GH_TOKEN,
			"chrishadrian"
		);
		setContributions(
			gitHubData.data.user.contributionsCollection.contributionCalendar
				.totalContributions
		);
	}, []);
	return (
		<Section id="accomplishments">
			<SectionDivider />
			<br />
			<SectionTitle>Personal Acomplishment</SectionTitle>
			<Boxes>
				{data.map((card, index) => (
					<Box key={index}>
						<BoxNum>
							{card.text === "Github Contributions (1y)"
								? contributions
								: card.number}
						</BoxNum>
						<BoxText>{card.text}</BoxText>
					</Box>
				))}
			</Boxes>
		</Section>
	);
};

export default Accomplishments;

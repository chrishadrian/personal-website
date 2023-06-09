import React, { useEffect, useState } from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";
import { getContributions } from "../../libs/githubAPI";

const Acomplishments = () => {
	const [contributions, setContributions] = useState(0);

	useEffect(async () => {
		const gitHubData = await getContributions(
			"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",
			"chrishadrian"
		);
		setContributions(
			gitHubData.data.user.contributionsCollection.contributionCalendar
				.totalContributions
		);
	}, []);
	return (
		<Section>
			<SectionTitle>Personal Acomplishment</SectionTitle>
			<Boxes>
				{data.map((card, index) => (
					<Box key={index}>
						<BoxNum>
							{card.text === "Github Contributions"
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

export default Acomplishments;

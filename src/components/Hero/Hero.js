import React from "react";

import {
	Section,
	SectionSubText,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const handleDownload = () => {
	const fileUrl = window.location.origin + "/files/CV_Christopher_Wong.pdf";
	const link = document.createElement("a");
	link.href = fileUrl;
	link.download = "CV_Christopher_Wong.pdf";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hello World! <br />I am Christopher Wong
			</SectionTitle>
			<SectionText>
				An independent and self-motivated penultimate computer science
				student at the University of British Columbia with interest in
				software development, AI, Fintech, E-commerce, and cloud
				computing services. Learn more about me by clicking the button
				below or browse through this website.
			</SectionText>
			<Button onClick={handleDownload}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;

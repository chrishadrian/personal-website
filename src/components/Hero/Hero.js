// Hero.js
import React from "react";
import {
	Section,
	SectionSubText,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ProfileImage, ContentSection } from "./HeroStyles";

const handleDownload = () => {
	const fileUrl = window.location.origin + "/files/Christopher_Wong_Resume.pdf";
	const link = document.createElement("a");
	link.href = fileUrl;
	link.download = "Christopher_Wong_Resume.pdf";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<ProfileImage src={"/images/profile.jpg"} alt="Christopher Wong" />
			<ContentSection>
				<SectionTitle main center>
					Hello World! <br />I am Christopher Wong
				</SectionTitle>
				<Button onClick={handleDownload}>My Résumé</Button>
			</ContentSection>
		</LeftSection>
	</Section>
);

export default Hero;

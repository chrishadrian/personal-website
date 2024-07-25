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
import { ReactTyped } from "react-typed";

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
				<SectionTitle main>
					Hello World!
				</SectionTitle>
				<SectionTitle typed>
					<ReactTyped
						strings={[
							"I am Christopher Hadrian Wong",
							"I am an aspiring Software Engineer",
							"I am an aspiring Full-Stack Developer",
							"I love building impactful projects",
							"I love playing basketball"
						]}
						typeSpeed={40}
						backSpeed={50}
						loop
					/>
				</SectionTitle>
				<Button onClick={handleDownload}>My Résumé</Button>
			</ContentSection>
		</LeftSection>
	</Section>
);

export default Hero;

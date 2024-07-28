import React, { useState } from "react";
import ReactModal from "react-modal";
import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	TagList,
	TitleContent,
	UtilityList,
	Img,
	Button,
	ModalContent,
	CloseButton,
} from "./ProjectsStyles";
import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { SiReact, SiAuth0, SiFirebase, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiExpress, SiJson } from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";

// Set the app element to hide main content from screen readers when modal is open
if (typeof window !== "undefined") {
	ReactModal.setAppElement("#__next");
}

const techIcons = {
	ReactJS: <SiReact />,
	Auth0: <SiAuth0 />,
	Express: <SiExpress />,
	Typescript: <SiTypescript />,
	"Tailwind CSS": <SiTailwindcss />,
	Firebase: <SiFirebase />,
	NodeJS: <FaNodeJs />,
	"Firebase Authentication": <SiFirebase />,
	Java: <FaJava />,
	JSON: <SiJson />,
	HTML: <SiHtml5 />,
	CSS: <SiCss3 />,
	Javascript: <SiJavascript />,
};

const Projects = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const openModal = (project) => {
		setSelectedProject(project);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		setSelectedProject(null);
	};

	return (
		<Section nopadding id="projects">
			<SectionDivider />
			<br />
			<SectionTitle>Projects</SectionTitle>
			<GridContainer>
				{projects.map(({ id, image, title, description, tags, source, video, visit }) => (
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree isTitle>{title}</HeaderThree>
						</TitleContent>
						<CardInfo>{description.substring(0, 100)}...</CardInfo>
						<Button onClick={() => openModal({ id, image, title, description, tags, source, video, visit })}>
							View More
						</Button>
					</BlogCard>
				))}
			</GridContainer>
			{selectedProject && (
				<ReactModal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel="Project Details"
					style={{
						overlay: {
							backgroundColor: 'rgba(0, 0, 0, 0.75)',
							backdropFilter: 'blur(10px)',
						},
						content: {
							inset: '20%',
							border: 'none',
							background: 'none',
							overflow: 'visible',
						},
					}}
				>
					<ModalContent>
						<CloseButton onClick={closeModal}>×</CloseButton>
						<Img src={selectedProject.image} />
						<TitleContent>
							<HeaderThree title>{selectedProject.title}</HeaderThree>
						</TitleContent>
						<CardInfo>{selectedProject.description}</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{selectedProject.tags.map((tag, i) => (
									<div key={i} style={{ width: "30px", height: "30px", margin: "0 10px" }}>
										{techIcons[tag] || tag}
									</div>
								))}
							</TagList>
						</div>
						<UtilityList>
							<ExternalLinks href={selectedProject.source} target="_blank">Code</ExternalLinks>
							<ExternalLinks href={selectedProject.video} target="_blank">Video</ExternalLinks>
							<ExternalLinks href={selectedProject.visit} target="_blank">Inspect</ExternalLinks>
						</UtilityList>
					</ModalContent>
				</ReactModal>
			)}
		</Section>
	);
};

export default Projects;

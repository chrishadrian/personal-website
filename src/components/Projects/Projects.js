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
	ModalImg,
	TechIconWrapper,
} from "./ProjectsStyles";
import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { techIcons, techUrls } from "./constants";

// Set the app element to hide main content from screen readers when modal is open
if (typeof window !== "undefined") {
	ReactModal.setAppElement("#__next");
}

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
		<Section id="projects">
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
						<CardInfo>{description.substring(0, 102)}...</CardInfo>
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
						<ModalImg src={selectedProject.image} />
						<TitleContent>
							<HeaderThree isTitle>{selectedProject.title}</HeaderThree>
						</TitleContent>
						<CardInfo>{selectedProject.description}</CardInfo>
						<div>
							<TitleContent>
								<HeaderThree>Stack</HeaderThree>
							</TitleContent>
							<TagList>
								{selectedProject.tags.map((tag, i) => (
									<TechIconWrapper key={i} href={techUrls[tag]} target="_blank" rel="noopener noreferrer" title={tag}>
										{techIcons[tag] || tag}
									</TechIconWrapper>
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

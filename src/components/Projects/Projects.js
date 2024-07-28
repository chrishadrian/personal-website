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

// Mapping for technology logos
const techLogos = {
	ReactJS: "/logos/reactjs.png",
	Auth0: "/logos/auth0.png",
	Firestore: "/logos/firestore.png",
	Express: "/logos/express.png",
	Typescript: "/logos/typescript.png",
	"Tailwind CSS": "/logos/tailwindcss.png",
	Firebase: "/logos/firebase.png",
	NodeJS: "/logos/nodejs.png",
	"Firebase Authentication": "/logos/firebaseauth.png",
	Java: "/logos/java.png",
	"Java Swing": "/logos/javaswing.png",
	JSON: "/logos/json.png",
	HTML: "/logos/html.png",
	CSS: "/logos/css.png",
	Javascript: "/logos/javascript.png",
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
							<HeaderThree title>{title}</HeaderThree>
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
							backdropFilter: 'blur(10px)'
						},
						content: {
							inset: '20%',
							border: 'none',
							background: 'none',
							overflow: 'visible'
						}
					}}
				>
					<ModalContent>
						<Img src={selectedProject.image} />
						<CloseButton onClick={closeModal}>×</CloseButton>
						<TitleContent>
							<HeaderThree title>{selectedProject.title}</HeaderThree>
						</TitleContent>
						<CardInfo>{selectedProject.description}</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{selectedProject.tags.map((tag, i) => (
									<img key={i} src={techLogos[tag]} alt={tag} style={{ width: "30px", height: "30px", margin: "0 10px" }} />
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

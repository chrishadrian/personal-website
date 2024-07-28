import Accomplishments from "../components/Accomplishments/Accomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
	return (
		<Layout>
			<Section grid>
			<Hero />
				<BgAnimation />
			</Section>
			<About />
			<Projects />
			<Skills />
			<Accomplishments />
		</Layout>
	);
};

export default Home;

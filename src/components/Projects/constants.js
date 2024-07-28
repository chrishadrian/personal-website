import {
	SiReact,
	SiAuth0,
	SiFirebase,
	SiTypescript,
	SiTailwindcss,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiExpress,
	SiJson,
} from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";

// Tech stack URLs
const techUrls = {
	ReactJS: "https://react.dev/",
	Auth0: "https://auth0.com/",
	Express: "https://expressjs.com/",
	Typescript: "https://www.typescriptlang.org/",
	"Tailwind CSS": "https://tailwindcss.com/",
	Firebase: "https://firebase.google.com/",
	NodeJS: "https://nodejs.org/",
	"Firebase Authentication": "https://firebase.google.com/products/auth",
	Java: "https://www.java.com/",
	JSON: "https://www.json.org/json-en.html",
	HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	Javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
};

const techIcons = {
	ReactJS: <SiReact size="100%"/>,
	Auth0: <SiAuth0 size="100%"/>,
	Express: <SiExpress size="100%"/>,
	Typescript: <SiTypescript size="100%"/>,
	"Tailwind CSS": <SiTailwindcss size="100%"/>,
	Firebase: <SiFirebase size="100%"/>,
	NodeJS: <FaNodeJs size="100%"/>,
	"Firebase Authentication": <SiFirebase size="100%"/>,
	Java: <FaJava size="100%"/>,
	JSON: <SiJson size="100%"/>,
	HTML: <SiHtml5 size="100%"/>,
	CSS: <SiCss3 size="100%"/>,
	Javascript: <SiJavascript size="100%"/>,
};

export {techIcons, techUrls}
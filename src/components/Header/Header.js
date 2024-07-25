import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	AiFillGithub,
	AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
	NavDiv,
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from "./HeaderStyles";

const Header = () => {
	const[isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<NavDiv isSticky={isSticky}>
			<Container>
				<Div1>
					<Link href="/">
						<a
							style={{
								display: "flex",
								alignItems: "center",
								color: "white",
								marginBottom: "20px",
							}}
						>
							<DiCssdeck size="3rem" /> <Span>CHW</Span>
						</a>
					</Link>
				</Div1>
				<Div2>
					<li>
						<Link href="#about">
							<NavLink>About</NavLink>
						</Link>
					</li>
					<li>
						<Link href="#projects">
							<NavLink>Projects</NavLink>
						</Link>
					</li>
					<li>
						<Link href="#tech">
							<NavLink>Skills</NavLink>
						</Link>
					</li>
				</Div2>
				<Div3>
					<SocialIcons href="https://github.com/chrishadrian">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/chrishdwong/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
				</Div3>
			</Container>
		</NavDiv>
	)
};

export default Header;

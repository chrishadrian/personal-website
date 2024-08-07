// HeroStyles.js
import styled from "styled-components";

export const LeftSection = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	@media ${(props) => props.theme.breakpoints.sm} {
		flex-direction: column;
		width: 100%;
		display: flex;
		align-items: center;
		margin: 0 auto 4rem;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		flex-direction: column;
		width: 100%;
		display: flex;
		align-items: center;
		margin: 0 auto 3rem;
	}
`;

export const ProfileImage = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 50%;
	margin-right: 80px;
	object-fit: cover;
	@media ${(props) => props.theme.breakpoints.lg} {
		width: 240px;
		height: 240px;
		margin-right: 50px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 200px;
		height: 200px;
		margin-bottom: 20px;
		margin-right: 0;
	}
`;

export const ContentSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-top: 5rem;
	@media ${(props) => props.theme.breakpoints.md} {
		align-items: center;
		text-align: center;
		margin-top: 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
		text-align: center;
	}
`;

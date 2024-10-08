import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: fill;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
	margin-bottom: 4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
`;

export const BlogCard = styled.div`
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    text-align: center;
    width: 400px;
    @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    }
`;

export const TitleContent = styled.div`
    text-align: center;
    z-index: 20;
    width: 100%;
`;

export const HeaderThree = styled.h3`
    font-weight: 500;
    letter-spacing: 2px;
    color: #9cc9e3;
    padding: .5rem 0;
    font-size: ${(props) => props.isTitle ? '3rem' : '2rem'};
    @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.isTitle ? '1.8rem' : '1.3rem'};
    }
`;

export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: #d0bb57;
`;

export const Intro = styled.div`
    width: 170px;
    margin: 0 auto;
    color: #dce3e7;
    font-family: 'Droid Serif', serif;
    font-size: 13px;
    font-style: italic;
    line-height: 18px;
`;

export const CardInfo = styled.p`
    width: 100%;
    padding: 1rem 50px;
    color: #e4e6e7;
    font-size: 1.7rem;
    line-height: 24px;
    text-align: justify;
    word-spacing: -1px;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: .3rem 3rem;
        font-size: 1.4rem;
    }
    @media (max-width: 376px)  {
        padding: .3rem 3rem;
        font-size: 1rem;
    }
`;

export const UtilityList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin: 3rem 0 0.5rem;
    @media ${(props) => props.theme.breakpoints.sm} {
       margin: 2rem 0 0rem;
    }
`;

export const ExternalLinks = styled.a`
    color: #d4c0c0;
    font-size: 1.6rem;
    padding: 1rem 1.5rem;
    background: #6b3030;
    border-radius: 15px;
    transition: 0.5s;
    &:hover {
        background: #801414;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.8rem 1.5rem;
        font-size: 1.2rem;
    }
`;

export const TagList = styled.ul`
    display: flex;
    justify-content: center;
    padding-top: 1rem;
`;

export const Tag = styled.li`
    color: #d8bfbf;
    font-size: 0.2rem;
    padding-bottom: 1rem;
`;

export const Button = styled.button`
    padding: 8px 16px;
    margin: 10px 0;
    background: #6b3030;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
    background: #801414;
    }
`;

export const ModalImg = styled.img`
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 5px;
`;

export const ModalContent = styled.div`
    position: relative;
    padding-bottom: 20px;
    background: rgba(26, 26, 29, 0.9); /* Semi-transparent background */
    backdrop-filter: blur(10px); /* Blurred background */
    color: #fff;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
    margin: auto;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: #444;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 50%;
    &:hover {
    background: #ff0000;
    }
`;

export const TechIconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin: 0 10px;
  color: white; /* Change this to the desired color */
  transition: color 0.3s;
  &:hover {
    color: #d4c0c0; /* Change this to the desired hover color */
  }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 15px;
        height: 15px;
    }
`;
import { React } from "react";
import styled from "styled-components";
import wideImg from "./horizontal-hero-background.JPG";
import tallImg from "./vertical-hero-background.JPG";

const Hero = () => {
  return (
    <Container>
      <TextWrapper>
        <p>Hi, I'm</p>
        <h1>Justin Mabutas</h1>
      </TextWrapper>
    </Container>
  );
};

const Container = styled.div`
  /* Sizing */
  width: 100%;
  height: 100vh;

  /* Flexbox */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* Background Image with Parallax Scrolling Effect*/
  /* background-image: linear-gradient(rgba(97, 97, 97, 0.5), rgba(0, 0, 0, 0.5)),
    url(${wideImg}); */
  background-image: url(${wideImg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (max-aspect-ratio: 1/1) {
    /* background-image: linear-gradient(rgba(97, 97, 97, 0.5), rgba(0, 0, 0, 0.5)),
      url(${tallImg}); */
    background-image: url(${tallImg});
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  color: #f8f8ff;
  background: rgba(0, 0, 0, 0.5);
  padding-left: 16px;
  padding-right: 16px;
`;

export default Hero;

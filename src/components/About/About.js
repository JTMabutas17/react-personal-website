import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profilePic from "./about-me-pic.jpg";

const About = () => {
  return (
    <Container>
      <h1>About Me</h1>
      <InfoWrapper>
        <ProfilePic src={profilePic} />
        <p>
          I'm Justin and I'm a recent college graduate from CSU, Long Beach. I
          love to program and learn new technologies. I'm currently learning Web
          Development with React, and Mobile App Development with React Native.
        </p>
      </InfoWrapper>
      <ResumeLink to="/resume" target="_blank">
        Resume
      </ResumeLink>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px;
  color: #f8f8ff;
  background-color: #222222;

  /* Flexbox */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  /* Sizing */
  width: 50%;

  /* Flexbox: Default Wide Aspect Ratio */
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Tall Aspect Ratio */
  @media (max-aspect-ratio: 1/1) {
    flex-direction: column;
    width: 75%;
  }
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  padding: 8px;
  width: 100px;
  height: 100px;
`;

const ResumeLink = styled(Link)`
  padding: 16px;
  background-color: #f8f8ff;
  color: #222222;
  text-decoration: none;
  border-radius: 16px;
`;

export default About;

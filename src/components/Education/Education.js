import React from "react";
import styled from "styled-components";
import csulbSeal from "./csulb-seal.png";
import csulbImg from "./csulb.jpg";

const Education = () => {
  return (
    <Container>
      {/* <h1>About Me</h1> */}
      <InfoWrapper>
        <SealPic src={csulbSeal} />
        <h1>California State University, Long Beach</h1>
        <h2>Bachelor's of Science in Computer Science</h2>
        <h2>May 2017 - June 2021</h2>
        <p>
          Relevant courses: Computer Security Principles, Data Structures and
          Algorithms, Computer Architecture, Operating Systems, Object Oriented
          Programming, Mobile App Development, Artificial Intelligence, Database
          Fundamentals, Distributed Systems, User Interface Design
        </p>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px;
  color: #f8f8ff;
  background-color: #333333;

  /* Flexbox */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: right;

  /* Background Image with Parallax Scrolling Effect*/
  background-image: linear-gradient(rgba(97, 97, 97, 0.5), rgba(0, 0, 0, 0.5)),
    url(${csulbImg});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;
const InfoWrapper = styled.div`
  /* Sizing */
  width: 50%;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.5);

  /* Flexbox: Default Wide Aspect Ratio */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  /* Tall Aspect Ratio */
  @media (max-aspect-ratio: 1/1) {
    width: 100%;
  }
`;

const SealPic = styled.img`
  border-radius: 50%;
  padding: 8px;
  width: 100px;
  height: 100px;
`;

export default Education;

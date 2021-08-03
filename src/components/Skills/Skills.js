import React from "react";
import styled from "styled-components";

import mobilePic from "./images/web-development.png";
import htmlPic from "./images/html5.png";
import cssPic from "./images/css3.png";
import reactPic from "./images/react.png";
import androidPic from "./images/mobile-development.png";
import javaPic from "./images/java.jpg";

const Skills = () => {
  return (
    <Container>
      <Title>
        <h1>Skills</h1>
      </Title>
      <Skill skillName="Web Development" skillPic={mobilePic} />
      <Row>
        <Skill skillName="HTML5" skillPic={htmlPic} />
        <Skill skillName="CSS3" skillPic={cssPic} />
        <Skill skillName="React" skillPic={reactPic} />
      </Row>
      <Skill skillName="Mobile App Development" skillPic={androidPic} />
      <Row>
        <Skill skillName="Java" skillPic={javaPic} />
        <Skill skillName="React Native" skillPic={reactPic} />
      </Row>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px;
  color: #f8f8ff;
  background-color: #222222;
  /* color: #222222; */
  /* background-color: #f8f8ff; */
`;

const Title = styled.div`
  /* Flexbox */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  /* Flexbox */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
`;

const Skill = (props) => {
  return (
    <SkillContainer>
      <SkillPic src={props.skillPic} />
      <h3>{props.skillName}</h3>
    </SkillContainer>
  );
};

const SkillPic = styled.img`
  border-radius: 50%;
  padding: 8px;
  width: 75px;
  height: 75px;
`;

const SkillContainer = styled.div`
  /* Flexbox */
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export default Skills;

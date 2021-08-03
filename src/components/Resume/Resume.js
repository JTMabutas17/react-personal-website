import React from "react";
import pdfFile from "./JustinMabutas_Resume_2021_v1.1.pdf";
import styled from "styled-components";

const Resume = () => {
  return (
    <Container>
      <PDF src={pdfFile} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const PDF = styled.iframe`
  display: block;
  border: none;
  width: 100%;
  height: 100%;
`;

export default Resume;

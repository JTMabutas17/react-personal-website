import React from "react";
import styled from "styled-components";
import footerBackground from "./footer-background.jpg";

const Footer = () => {
  return (
    <Container>
      <h1>Contact Me</h1>
      <FooterLink href="mailto:mabutas.justin@gmail.com">Email</FooterLink>
      <FooterLink href="https://github.com/JTMabutas17" target="_blank">
        Github
      </FooterLink>
      <FooterLink
        href="https://www.linkedin.com/in/justin-mabutas-62b592188/"
        target="_blank"
      >
        LinkedIn
      </FooterLink>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px;
  color: #f8f8ff;

  /* Flexbox */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* Background Image */
  background-image: url(${footerBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const FooterLink = styled.a`
  padding: 16px;
  color: #f8f8ff;
`;

export default Footer;

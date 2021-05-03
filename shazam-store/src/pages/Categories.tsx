import React from "react";
import { Link } from "react-router-dom";
import { Container, ContainerOverlay, LinkButtonGo, Subtitle } from "../styles/index";

const Categories = () => {
  return (
    <>
      <Subtitle>Categories</Subtitle>
      <Container width="80%">
        <Container width="320px">
          <img
            src="https://ss628.liverpool.com.mx/lg/1098293635.jpg"
            width="100%"
            alt=""
          />
          <ContainerOverlay>
            <h3>Computers</h3>
            <LinkButtonGo to="/categories/computers">Go</LinkButtonGo>
          </ContainerOverlay>
        </Container>

        <Container width="320px">
          <img
            src="https://ss628.liverpool.com.mx/lg/1096022138.jpg"
            width="100%"
            alt=""
          />
          <ContainerOverlay>
            <h3>Tablets and Phones</h3>
            <LinkButtonGo to="/categories/games">Go</LinkButtonGo>
          </ContainerOverlay>
        </Container>

        <Container width="320px">
          <img
            src="https://ss630.liverpool.com.mx/lg/1100170023.jpg"
            width="100%"
            alt=""
          />
          <ContainerOverlay>
            <h3>Music</h3>
            <LinkButtonGo to="/categories/headphones">Go</LinkButtonGo>
          </ContainerOverlay>
        </Container>

        <Container width="320px">
          <img
            src="https://ss423.liverpool.com.mx/lg/1100132300.jpg"
            width="100%"
            alt=""
          />

          <ContainerOverlay>
            <h3>Video Games</h3>
            <LinkButtonGo to="/categories/games">Go</LinkButtonGo>
          </ContainerOverlay>
        </Container>

        <Container width="320px">
          <img
            src="https://ss627.liverpool.com.mx/lg/1086677055.jpg"
            width="100%"
            alt=""
          />

          <ContainerOverlay>
            <h3>Drones</h3>
            <LinkButtonGo to="/categories/drones">Go</LinkButtonGo>
          </ContainerOverlay>
        </Container>
      </Container>
    </>
  );
};

export default Categories;

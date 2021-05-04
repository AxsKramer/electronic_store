import React from "react";
import { Container, ContainerOverlay, LinkButtonGo, Subtitle } from "../styles/index";

const Categories = () => {
  return (
    <>
      <Subtitle>Categorias</Subtitle>
      <Container width="80%">
        <Container width="320px">
          <img
            src="https://ss628.liverpool.com.mx/lg/1098293635.jpg"
            width="100%"
            alt=""
          />
          <ContainerOverlay>
            <h3>Computadoras</h3>
            <LinkButtonGo to="/categorias/computadoras">Ir</LinkButtonGo>
          </ContainerOverlay>
        </Container>

        <Container width="320px">
          <img
            src="https://ss628.liverpool.com.mx/lg/1096022138.jpg"
            width="100%"
            alt=""
          />
          <ContainerOverlay>
            <h3>Tablets y Celulares</h3>
            <LinkButtonGo to="/categorias/celulares">Ir</LinkButtonGo>
          </ContainerOverlay>
        </Container>

        <Container width="320px">
          <img
            src="https://ss630.liverpool.com.mx/lg/1100170023.jpg"
            width="100%"
            alt=""
          />
          <ContainerOverlay>
            <h3>Audifonos</h3>
            <LinkButtonGo to="/categorias/audifonos">Ir</LinkButtonGo>
          </ContainerOverlay>
        </Container>

        <Container width="320px">
          <img
            src="https://ss423.liverpool.com.mx/lg/1100132300.jpg"
            width="100%"
            alt=""
          />

          <ContainerOverlay>
            <h3>Video Juegos</h3>
            <LinkButtonGo to="/categorias/videojuegos">Ir</LinkButtonGo>
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
            <LinkButtonGo to="/categorias/drones">Ir</LinkButtonGo>
          </ContainerOverlay>
        </Container>
      </Container>
    </>
  );
};

export default Categories;

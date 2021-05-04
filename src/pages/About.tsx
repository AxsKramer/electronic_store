import React from "react";
import Logo from "../components/Logo";
import { Container, Subtitle, Ptag } from '../styles/index';

const About = () => {
  return (
    <Container direction="column">
      <Logo withBg />
      <Subtitle>Acerca de nosotros</Subtitle>
      <Container width="80%">
        <Ptag>
          Es la combinación de una amplia oferta comercial de productos
          electrónicos de calidad y del momento, una experiencia de compra
          emocionante presencial y online, infraestructura sólida y enfoque de
          rentabilidad nos permiten servir al cliente y así contar con su
          preferencia.
        </Ptag>
      </Container>
      <Subtitle>Misión</Subtitle>
      <Container width="80%">
        <Ptag>Servimos al cliente, en todo lugar, todos los días, toda la vida.</Ptag>
      </Container>
      <Subtitle>Visión</Subtitle>
      <Container width="80%">
        <Ptag>Ser la opción más atractiva en servicio, surtido y valor.</Ptag>
      </Container>
      <Subtitle>Objetivo</Subtitle>
      <Container width="80%">
        <Ptag>
          Ser el lugar de preferencia de nuestros clientes, con los que estamos
          unidos por un mismo sentimiento, ya que tanto ellos como nosotros...
          Amamos la tecnología.
        </Ptag>
      </Container>
      <Subtitle>Valores</Subtitle>
      <Container width='80%' background='#000428'>
        <img src="https://www.elpuertodeliverpool.mx/img/valores.png" width='100%' alt=""/>
      </Container>
    </Container>
  );
};

export default About;

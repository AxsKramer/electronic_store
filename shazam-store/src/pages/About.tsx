import React from "react";
import Logo from "../components/Logo";
import { Container, Subtitle } from "../styles/index";

const About = () => {
  return (
    <Container direction="column">
      <Logo withBg />
      <Subtitle>Acerca de nosotros</Subtitle>
      <Container width="80%">
        <p>
          Es la combinación de una amplia oferta comercial de productos
          electrónicos de calidad y del momento, una experiencia de compra
          emocionante presencial y online, infraestructura sólida y enfoque de
          rentabilidad nos permiten servir al cliente y así contar con su
          preferencia.
        </p>
      </Container>
      <Subtitle>Misión</Subtitle>
      <Container width="80%">
        <p>Servimos al cliente, en todo lugar, todos los días, toda la vida.</p>
      </Container>
      <Subtitle>Visión</Subtitle>
      <Container width="80%">
        <p>Ser la opción más atractiva en servicio, surtido y valor.</p>
      </Container>
      <Subtitle>Objetivo</Subtitle>
      <Container width="80%">
        <p>
          Ser el lugar de preferencia de nuestros clientes, con los que estamos
          unidos por un mismo sentimiento, ya que tanto ellos como nosotros...
          Amamos la tecnología.
        </p>
      </Container>
      <Subtitle>Valores</Subtitle>
      <Container width='80%' background='#000428'>
        <img src="https://www.elpuertodeliverpool.mx/img/valores.png" width='100%' alt=""/>
      </Container>
    </Container>
  );
};

export default About;

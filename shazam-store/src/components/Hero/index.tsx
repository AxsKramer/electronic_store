import React from "react";
import { ImageHero, Container } from "../../styles/index";
import Slider from "@farbenmeer/react-spring-slider";

const Hero = () => {
  return (
    <Container height="500px" width="80%">
      <Slider hasArrows hasBullets auto={5000}>
        <Container>
          <ImageHero
            src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_575x431/public/media/image/2018/11/asistente-alexa-amazon-estrena-windows-10.jpg?itok=fxbny_q5"
            alt="Hero"
          />
        </Container>
        <Container>
          <ImageHero
            src="https://i.ytimg.com/vi/0tUqIHwHDEc/maxresdefault.jpg"
            alt="Hero"
          />
        </Container>
        <Container>
          <ImageHero
            src="https://as.com/meristation/imagenes/2020/11/06/reportajes/1604654372_894608_1604656126_noticia_normal.jpg"
            alt="Hero"
          />
        </Container>
        <Container>
          <ImageHero
            src="https://cheesycam.com/wp-content/uploads/2016/09/dji-mavic-pro-drone-folding-arms1.png"
            alt="Hero"
          />
        </Container>
        <Container>
          <ImageHero
            src="https://9to5mac.com/wp-content/uploads/sites/6/2021/04/Screen-Shot-2021-04-20-at-1.56.11-PM.jpg?quality=82&strip=all"
            alt="Hero"
          />
        </Container>
      </Slider>
    </Container>
  );
};

export default Hero;

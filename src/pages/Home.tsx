import React from 'react'
import { Container, Subtitle, ContainerScrollX } from '../styles/index';

const Home = () => {
  return (
    <>
      {/* Type of payments */}
      <Container width='80%'>
        <Container width='320px'>
          <img src="/images/envio.png" alt="" width='320px'/>
        </Container>
        <Container width='320px'>
          <img src="/images/pago.png" alt="" width='320px'/>
        </Container>
        <Container width='320px'>
          <img src="/images/mesessin.png" alt="" width='320px'/>
        </Container>
      </Container>

      {/* Ad 1 */}
      <Container width='80%'>
        <img src="/images/iphone.png" alt="" width='100%' />
      </Container>

      {/* What things people search */}
      <Subtitle>Lo más buscado </Subtitle>
      <Container width='80%'>
        <ContainerScrollX >
          <Container >
            <img src="https://ss627.liverpool.com.mx/xl/1086717014.jpg" width='200' alt=""/>
          </Container>
          <Container >
            <img src="https://ss630.liverpool.com.mx/xl/1057432418.jpg" width='200' alt=""/>
          </Container>
          <Container >
            <img src="https://ss423.liverpool.com.mx/lg/1100132300.jpg" width='200' alt=""/>
          </Container>
        </ContainerScrollX>
      </Container>

      {/* Ad 2 */}
      <Container width='80%'>
        <img src="/images/alexa.png" alt="" width='100%'  />
      </Container>

      {/* Season video games */}
      <Subtitle>Video juegos de temporada</Subtitle>
      <Container width='80%'>
        <ContainerScrollX>
          <Container>
          <img src="https://ss423.liverpool.com.mx/lg/1085170011.jpg" alt="" width='200'/>
          </Container>
          <Container>
            <img src="https://ss423.liverpool.com.mx/lg/1097875908.jpg" alt="" width='200'/>
          </Container>
          <Container>
            <img src="https://ss423.liverpool.com.mx/lg/1069027608.jpg" alt="" width='200'/>
          </Container>
          <Container>
            <img src="https://ss423.liverpool.com.mx/lg/1097248598.jpg" alt="" width='200'/>
          </Container>
          <Container>
            <img src="https://ss423.liverpool.com.mx/lg/1085432156.jpg" alt="" width='200'/>
          </Container>
        </ContainerScrollX>
      </Container>

      {/* New products */}
      <Subtitle>Proximamente</Subtitle>
      <Container width='80%'>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/cxXvYJyBlc4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Container>

      {/* Phone companies */}
      <Subtitle>Compañias Telefonicas</Subtitle>
      <Container background='whitesmoke' width='80%' >
        <Container width='280px'>
          <img src="https://www.telcel.com/content/dam/htmls/img/icons/logo-telcel.svg" width='280' alt=""/>
        </Container>
        <Container width='280px'>
          <img src="https://www.att.com.mx/assets/img/logos/logo-default.png" width='280' alt=""/>
        </Container>
        <Container width='280px'>
          <img src="https://logos-download.com/wp-content/uploads/2016/06/Movistar_logo_logotipo.png" width='280' alt=""/>
        </Container>
      </Container>
    </>
  )
}

export default Home;

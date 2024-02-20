import CallToAction from "../../../../components/call-to-action/call-to-action";
import Title from "../../../../components/title/title";
import { Bottom, Card, Content, Info, Name, P, Photos, Picture, Text, Wrapper } from "./about.style";

const About = () => {
  return (
    <Wrapper>
      <Content>
        <Info>
          <Title>Sobre Nós</Title>
          <P>Valéria “Lela” Reis e Daniel “Dani Sousa” são crias das periferias de São Paulo e se conheceram atuando profissionalmente com Diversidade & Inclusão.</P>
          <P>Em 2023 se juntaram para criar a (Se)mentes, uma agência de comunicação e impacto que cria soluções em comunicação que influenciam positivamente a carreira de pessoas negras.</P>
          <P>Queremos fortalecer a autoestima e a ambição profissional da comunidade preta brasileira.</P>
        </Info>
        <Photos>
          <Card>
            <Picture src={`${process.env.PUBLIC_URL}/assets/images/lela.jpg`}/>
            <Name>Valéria Reis</Name>
          </Card>
          <Card>
            <Picture src={`${process.env.PUBLIC_URL}/assets/images/dani.jpg`}/>
            <Name>Daniel Sousa</Name>
          </Card>
        </Photos>
      </Content>
      <Bottom>
        <CallToAction />
        <Text>Inscreva-se e aguarde nosso aviso caso seu relato seja um dos selecionados.</Text>
      </Bottom>
    </Wrapper>
  )
};

export default About;

import CallToAction from "../../../../components/call-to-action/call-to-action";
import Title from "../../../../components/title/title";
import { By, Class, Content, Name, Text, Wrapper } from "./introduction.style";

const Introduction = () => {
  return (
    <Wrapper>
      <Content>
        <Title><span>sua<br/> voz, sua história</span></Title>
        <Text>O Anuário (Se)mentes é nossa publicação anual que apresenta diferentes profissões para inspirar pessoas negras a sonharem com outras possibilidades de carreira, para além das profissões que normalmente nos associam. A exibição de pessoas negras em profissões valorizadas é importante para criarmos novas imagens da nossa comunidade e assim sonhar com um futuro que corrija diferenças históricas de renda e aumente a circulação de dinheiro na nossa comunidade.</Text>
        <CallToAction />
      </Content>
      <By>
        <Name>joyce Rocha</Name>
        <Class>UX Designer</Class>
      </By>
    </Wrapper>
  )
};

export default Introduction;

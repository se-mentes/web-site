import Title from "../../../../components/title/title";
import { seeds } from "../../../../models/seeds";
import { Content, Seed, SeedsWrapper, Wrapper } from "./seeds.style";

const renderSeed = (seed: any) => (
  <Seed title={seed.name} alt={seed.name} src={`${process.env.PUBLIC_URL}/assets/images/people/${seed.photo}`} />
);

const Seeds = () => (
  <Wrapper>
    <Content>
      <Title>Conheça as Sementes da primeira edição</Title>
      <SeedsWrapper>
        {seeds.map((seed: any) => renderSeed(seed))}
      </SeedsWrapper>
    </Content>
  </Wrapper>
);

export default Seeds;

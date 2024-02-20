import NavBar from "../../components/nav-bar/nav-bar";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Home from "../../components/home/home";
import Introduction from "./components/introduction/introduction";
import Seeds from "./components/seeds/seeds";
import { ContentLimit, Wrapper } from "./landingpage.style";

const LandingPage = () => (
  <Wrapper>
    <NavBar />
    <Home texts={["Somos uma nação com 115 milhões de pessoas negras. Mesmo depois de nos negarem saúde, saneamento, segurança, educação e emprego estamos aqui. Temos a marca da resiliência, da adaptação e também da alegria. Nossos ancestrais construíram as pirâmides, inventaram a medicina e a matemática. Nossa imagem é sempre associada à violência e à dor, mas nossa história é gloriosa e prossegue. Que o mundo nos veja e que muitos outros se inspirem em nossas trajetórias. Somos (Se)mentes."]}/>
    <Seeds />
    <Introduction />
    <About />
    <Footer />
    <ContentLimit>
    </ContentLimit>
  </Wrapper>
);

export default LandingPage;

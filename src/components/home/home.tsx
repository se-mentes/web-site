import CallToAction from "../call-to-action/call-to-action";
import { Content, Name, NameWrapper, Text, Wrapper } from "./home.style";

interface Props {
  texts?: string[];
  hideSignup?: boolean;
  callToActionText?: String;
  onCallToActionClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Home = ({ texts, hideSignup, callToActionText, onCallToActionClick }: Props) => (
  <Wrapper>
    <NameWrapper><Name>(Se)mentes</Name></NameWrapper>
    <Content>
      <div>
        {
          texts?.map((t) => <Text>{t}</Text>)
        }
        {hideSignup ? null : <CallToAction handleClick={onCallToActionClick} text={callToActionText} />}
      </div>
    </Content>
  </Wrapper>
);

export default Home;

import { Container, PageImage } from "../ui/Layout";
import TypingEffect from "../ui/TypingEffect";

const AboutPage = () => {
  return (
    <Container>
      <PageImage url="/public/images/main.jpg">
        <TypingEffect
          text="О нас"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </PageImage>
    </Container>
  );
};

export default AboutPage;

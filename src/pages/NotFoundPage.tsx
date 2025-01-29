import { Container, Row } from "../ui/Layout";
import TypingEffect from "../ui/TypingEffect";

const NotFoundPage = () => {
  return (
    <Container>
      <Row>
        <TypingEffect
          text="404 Not Found"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </Row>
    </Container>
  );
};

export default NotFoundPage;

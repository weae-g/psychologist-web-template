import { useEffect } from "react";
import useTestStore from "../store/testStore";
import Card, { CardContent, CardSubtitle, CardTitle } from "../ui/Card";
import { Container, Grid, PageImage, Row } from "../ui/Layout";
import { HighlightText, SectionTitle, Text } from "../ui/Typhograthy";
import TypingEffect from "../ui/TypingEffect";
import { FaBrain, FaHouseUser, FaRegHandshake, FaBook } from "react-icons/fa6";
import RAvatar from "../ui/RAvatar";
import RImage from "../ui/RImage";
import Breadcrumbs from "../ui/BreadCrumbs";

const TestsPage = () => {
  const { tests, getTests } = useTestStore((state) => ({
    tests: state.tests,
    getTests: state.getTests,
  }));

  const fetchData = async () => {
    await getTests();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Breadcrumbs crumbs={[{ label: "Тесты", link: "/tests" }]} />

      <PageImage url="/public/images/test-main.jpg">
        <TypingEffect
          text="Тесты"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </PageImage>
      <SectionTitle>
        Зачем проводить <HighlightText>психологические</HighlightText> тесты ?
      </SectionTitle>
      <Text>
        Психологические тесты являются важным инструментом для изучения и
        понимания различных аспектов человеческой психики, поведения и личности.
        Они позволяют психологам и исследователям получить информацию о
        личностных особенностях, эмоциональном состоянии, склонностях и
        предпочтениях человека. Вот несколько причин, почему психологические
        тесты имеют важное значение:
      </Text>
      <Grid rows={1} columns={4}>
        <Card>
          <CardContent>
            <FaHouseUser color="#4ba8ff" size={96} />
            <CardTitle>Оценка личностных характеристик</CardTitle>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <FaBrain color="#4ba8ff" size={96} />
            <CardTitle>Диагностика психологических состояний</CardTitle>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <FaBook color="#4ba8ff" size={96} />
            <CardTitle>Профессиональная ориентация</CardTitle>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <FaRegHandshake color="#4ba8ff" size={96} />
            <CardTitle>Развитие отношений</CardTitle>
          </CardContent>
        </Card>
      </Grid>

      <SectionTitle>
        Какой тест <HighlightText>вы хотите</HighlightText> пройти ?
      </SectionTitle>

      <Grid columns={3}>
        {tests?.map((test) => (
          <Card key={test.id}>
            <RImage height={320} src={test.image} alt={test.title} />
            <CardContent alignItems="flex-start">
              <CardTitle>{test.title}</CardTitle>
              <CardSubtitle>{test.subtitle}</CardSubtitle>
              <Row justifyContent="flex-end">
                <RAvatar
                  src={test.psychologist.user.profile.image}
                  alt="account_logo"
                />
                <Text fontSize="16px">
                  {test.psychologist.user.profile.name}
                </Text>
              </Row>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default TestsPage;

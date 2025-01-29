import TypingEffect from "../ui/TypingEffect";
import Card, { CardContent, CardImage, CardText, CardTitle } from "../ui/Card";
import QAndA from "../components/QandA";

import { data } from "../data/HomePsychologist.json";
import { HighlightText, SectionTitle } from "../ui/Typhograthy";
import { Container, Grid, PageImage, Row } from "../ui/Layout";
import Breadcrumbs from "../ui/BreadCrumbs";

type DataType = {
  request: string;
  imageUrl: string;
};

const HomePage = () => {
  return (
    <Container>
      <Breadcrumbs crumbs={[{ label: "Главная", link: "/" }]} />
      <PageImage url="/public/images/main.jpg">
        <TypingEffect
          text="Добро пожаловать!"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </PageImage>

      <SectionTitle>
        С чем <HighlightText>поможет</HighlightText> психолог ?
      </SectionTitle>
      <Grid rows={2} columns={3}>
        {data.map((item: DataType, index: number) => (
          <Card key={index}>
            <CardImage size={256} src={item.imageUrl} />
            <CardContent>
              <CardTitle>{item.request}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </Grid>

      <SectionTitle>
        Что мы <HighlightText>предлагаем</HighlightText> ?
      </SectionTitle>
      <Row>
        <Card>
          <CardImage size={256} src="/public/images/psychotherapy-1.png" />
          <CardContent>
            <CardTitle>Терапия #1</CardTitle>
            <CardText>Некий текст</CardText>
          </CardContent>
        </Card>
        <Card>
          <CardImage size={256} src="/public/images/psychotherapy-2.png" />
          <CardContent>
            <CardTitle>Терапия #2</CardTitle>
            <CardText>Некий текст</CardText>
          </CardContent>
        </Card>
      </Row>
      <SectionTitle>Часто задаваемые вопросы</SectionTitle>
      <QAndA />
    </Container>
  );
};

export default HomePage;

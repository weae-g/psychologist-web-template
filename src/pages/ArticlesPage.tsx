import { useEffect } from "react";
import useArticleStore from "../store/articleStore";
import { Container, Grid, PageImage, Row } from "../ui/Layout";
import TypingEffect from "../ui/TypingEffect";
import Card, {
  CardContent,
  CardImage,
  CardSubtitle,
  CardTitle,
} from "../ui/Card";
import { Text } from "../ui/Typhograthy";
import RAvatar from "../ui/RAvatar";
import RImage from "../ui/RImage";
import Breadcrumbs from "../ui/BreadCrumbs";

const ArticlesPage = () => {
  const { articles, getArticles } = useArticleStore((state) => ({
    articles: state.articles,
    getArticles: state.getArticles,
  }));

  const fetchData = async () => {
    await getArticles();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Breadcrumbs crumbs={[{ label: "Статьи", link: "/articles" }]} />

      <PageImage url="/public/images/main.jpg">
        <TypingEffect
          text="Статьи"
          typingDelay={100}
          erasingDelay={100}
          pauseDelay={1000}
        />
      </PageImage>
      <Grid columns={3}>
        {articles?.map((article) => (
          <Card key={article.id}>
            <RImage src={article.image} alt={article.title} />
            <CardContent alignItems='flex-start'>
              <CardTitle>{article.title}</CardTitle>
              <CardSubtitle>{article.subtitle}</CardSubtitle>
              <Row justifyContent="flex-end">
                <RAvatar
                  src={article.psychologist.user.profile.image}
                  alt="account_logo"
                />
                <Text fontSize="16px">
                  {article.psychologist.user.profile.name}
                </Text>
              </Row>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticlesPage;

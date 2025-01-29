import { Link } from "react-router-dom";
import { FooterContainer, FooterContent, FooterText } from "./FooterStyles";
import { Logo, LogoImage, MyLink } from "./HeaderStyles";
import { Column, Row } from "../../ui/Layout";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Row>
          <Link to="/">
            <Logo>
              <LogoImage src="/public/logo-monochrome.png" />
            </Logo>
          </Link>
        </Row>
        <Row justifyContent="space-between">
          <Column alignItems="flex-start">
            <MyLink color="white">
              <Link to="/terms">Условия использования</Link>
            </MyLink>
            <MyLink color="white">
              <Link to="/privacy">Политика конфиденциальности</Link>
            </MyLink>
            <MyLink color="white">
              <Link to="/faq">Часто задаваемые вопросы</Link>
            </MyLink>
            <MyLink color="white">
              <Link to="/support">Поддержка</Link>
            </MyLink>
          </Column>
          <Column alignItems="flex-end">
            <MyLink color="white">
              <Link to="/about">О нас</Link>
            </MyLink>
            <MyLink color="white">
              <Link to="/services">Услуги</Link>
            </MyLink>
            <MyLink color="white">
              <Link to="/contact">Контакты</Link>
            </MyLink>
            <MyLink color="white">
              <Link to="/blog">Блог</Link>
            </MyLink>
          </Column>
        </Row>
        <FooterText>&copy; 2024, MindCare</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

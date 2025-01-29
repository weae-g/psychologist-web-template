import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderNav,
  HeaderNavList,
  HeaderNavItem,
  MyLink,
  Logo,
  HeaderActions,
  LogoImage,
  LogoText,
} from "./HeaderStyles";
import Modal from "../../ui/Modal";
import AuthForm from "../Auth/AuthForm";
import RegForm from "../Auth/RegForm";
import { Button } from "../../ui/Button";
import { Row } from "../../ui/Layout";
import useAuthStore from "../../store/authStore";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAuthForm, setIsAuthForm] = useState<boolean>(true);

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const { user } = useAuthStore();

  useEffect(() => {
    if (user) setIsAuth(true);
  }, [user]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleForm = () => {
    setIsAuthForm((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo>
          <LogoImage src="/public/logo.png" />
          <LogoText>MindCare</LogoText>
        </Logo>
      </Link>
      <HeaderNav>
        <HeaderNavList>
          <HeaderNavItem>
            <MyLink>
              <Link to={"/tests"}>Тесты</Link>
            </MyLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <MyLink>
              <Link to={"/articles"}>Статьи</Link>
            </MyLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <MyLink>
              <Link to={"/"}>Для психологов</Link>
            </MyLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <MyLink>
              <Link to={"/about"}>О нас</Link>
            </MyLink>
          </HeaderNavItem>
        </HeaderNavList>
      </HeaderNav>
      <HeaderActions>
        {!isAuth ? (
          <Button onClick={openModal}>Войти</Button>
        ) : (
          <Link to={"/profile"}>{user?.email}</Link>
        )}
      </HeaderActions>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isAuthForm ? (
          <AuthForm closeModal={closeModal} />
        ) : (
          <RegForm closeModal={closeModal} />
        )}
        <Row>
          <MyLink onClick={toggleForm}>
            {isAuthForm ? "Регистрация" : "Авторизация"}
          </MyLink>
        </Row>
      </Modal>
    </HeaderContainer>
  );
};

export default Header;

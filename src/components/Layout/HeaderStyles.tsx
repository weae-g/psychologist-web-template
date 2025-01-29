import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  max-width: 1400px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 1rem;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom: 2px solid #e5f1fc;
`;

export const HeaderNav = styled.nav``;
export const HeaderNavList = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const HeaderNavItem = styled.li`
  padding: 0.5rem;
`;

interface MyLinkProps {
  gradientColorStart?: string;
  gradientColorEnd?: string;
  hoverColor?: string;
  color?: string;
}

export const MyLink = styled.div<MyLinkProps>`
  background-image: linear-gradient(
    to right,
    ${({ gradientColorStart = "#53baff" }) => gradientColorStart},
    ${({ gradientColorEnd = "#00bbff" }) => gradientColorEnd} 50%,
    ${({ color = "#000" }) => color} 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;

  &:before {
    content: "";
    background: ${({ gradientColorStart = "#53baff" }) => gradientColorStart};
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;

    &:before {
      width: 100%;
    }
  }

  cursor: pointer;
`;

export const HeaderActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogoImage = styled.img`
  width: 64px;
  aspect-ratio: 1;
`;

export const LogoText = styled.p`
  font-size: 28px;
`;

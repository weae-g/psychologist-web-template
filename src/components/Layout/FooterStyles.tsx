import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #252525;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #ececec;
`;

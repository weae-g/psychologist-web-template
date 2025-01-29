import styled from "styled-components";

type SectionTitleProps = {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
};

export const SectionTitle = styled.h2<SectionTitleProps>`
  font-size: ${({ fontSize = "32px" }) => fontSize};
  font-weight: ${({ fontWeight = "bold" }) => fontWeight};
  color: ${({ color = "#333" }) => color};
`;

type HighlightTextProps = {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
};

export const HighlightText = styled.span<HighlightTextProps>`
  font-size: ${({ fontSize = "32px" }) => fontSize};
  font-weight: ${({ fontWeight = "bold" }) => fontWeight};
  color: ${({ color = "#4ba8ff" }) => color};
`;

type TextProps = {
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  color?: string;
};

export const Text = styled.p<TextProps>`
  font-size: ${({ fontSize = "1rem" }) => fontSize};
  line-height: ${({ lineHeight = "1.5rem" }) => lineHeight};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  color: ${({ color = "#202020" }) => color};
`;

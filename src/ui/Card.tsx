import styled from "styled-components";

interface CardProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  boxShadow?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  boxShadow,
  children,
}) => {
  return (
    <StyledCard
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div<CardProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  box-shadow: ${({ boxShadow }) =>
    boxShadow || "0px 2px 4px rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.01);
  }
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

interface CardImageProps {
  src?: string;
  alt?: string;
  size?: number;
}

export const CardImage = styled.img<CardImageProps>`
  width: ${({ size = "100%" }) => size}px;
  height: ${({ size = "auto" }) => size}px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &:hover {
    transform: scale(1.01);
  }
  transition: all 0.5s ease-in-out;
`;

interface CardContentProps {
  width?: string;
  padding?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
}

export const CardContent = styled.div<CardContentProps>`
  width: ${({ width }) => width || "100%"};
  padding: ${({ padding }) => padding || "1rem"};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  gap: ${({ gap }) => gap || "1rem"};
`;

export const CardTitle = styled.h2<{ fontSize?: string; textAlign?: string }>`
  font-size: ${({ fontSize }) => fontSize || "1.2rem"};
  text-align: ${({ textAlign }) => textAlign || "center"};
`;

export const CardSubtitle = styled.h2<{
  fontSize?: string;
  marginBottom?: string;
  textAlign?: string;
}>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "8px"};
  text-align: ${({ textAlign }) => textAlign || "center"};
`;

export const CardText = styled.p<{ fontSize?: string; color?: string }>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: ${({ color }) => color || "#555"};
`;
export default Card;

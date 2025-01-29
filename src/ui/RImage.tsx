import styled from "styled-components";

type PropsType = {
  src?: string;
  alt?: string;
  height?: number;
  width?: number;
};

interface ImageContainerProps {
  height?: number;
  width?: number;
}

const RImage = ({ src, alt, height, width }: PropsType) => {
  return (
    <ImageContainer height={height} width={width}>
      {src && <Image src={src} alt={alt} />}
    </ImageContainer>
  );
};

const ImageContainer = styled.div<ImageContainerProps>`
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default RImage;

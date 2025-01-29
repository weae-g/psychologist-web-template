import styled from "styled-components";

type PropsType = {
  src?: string;
  alt?: string;
  size?: number;
};

interface AvatarContainerProps {
  size: number;
}

const RAvatar = ({ src, alt, size = 40 }: PropsType) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImage src={src} alt={alt} />
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div<AvatarContainerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default RAvatar;

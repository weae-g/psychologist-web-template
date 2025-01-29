import styled, { css } from "styled-components";
import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  padding?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  focusColor?: string;
  customStyles?: string;
}

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  padding: ${({ padding }) => padding || "0.5rem"};
  border: ${({ border }) => border || "1px solid #ccc"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ focusColor }) => focusColor || "#0b85ff"};
  }

  ${({ customStyles }) =>
    customStyles &&
    css`
      ${customStyles}
    `}
`;

const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  return <StyledInput placeholder={placeholder} {...rest} />;
};

export default Input;

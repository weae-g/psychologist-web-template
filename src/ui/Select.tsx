import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface SelectProps {
  options: { label: string; value: string | number }[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const StyledSelect = styled.div`
  position: relative;
  width: 100%;
`;

const SelectInput = styled.div`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2eded;
  border-radius: 4px;
  font-size: 16px;
  color: #2d3667;
  background-color: #fff;
  transition: border-color 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #b3b3b3;
  }
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #e2eded;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const OptionItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (newValue: string | number) => {
    onChange(newValue);
    setIsOpen(false);
  };

  return (
    <StyledSelect>
      <SelectInput onClick={() => setIsOpen(!isOpen)}>
        {value ? (
          options.find((option) => option.value === value)?.label
        ) : (
          placeholder
        )}
      </SelectInput>
      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <OptionItem
              key={option.value}
              onClick={() => handleSelectChange(option.value)}
            >
              {option.label}
            </OptionItem>
          ))}
        </OptionsContainer>
      )}
    </StyledSelect>
  );
};

export default Select;

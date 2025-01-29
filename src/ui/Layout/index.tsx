import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

interface RowProps {
  alignItems?: string;
  justifyContent?: string;
}

export const Row = styled.div<RowProps>`
  width: 100%;
  display: flex;
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  border-radius: 16px;
  gap: 1rem;
`;

interface ColumnProps {
  alignItems?: string;
  justifyContent?: string;
}

export const Column = styled.div<ColumnProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  border-radius: 16px;
  gap: 1rem;
`;

export const Grid = styled.div<{ rows?: number; columns: number }>`
  width: 100%;
  display: grid;
  grid-template-rows: ${({ rows }) => (rows ? `repeat(${rows}, 1fr)` : "auto")};
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: 1rem;
`;

export const PageImage = styled.div<{ url: string }>`
  height: 400px;
  aspect-ratio: "16:9";
  width: 100%;
  background: url(${(props) => props.url}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

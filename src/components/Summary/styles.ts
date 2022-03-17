import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

interface Props {
  isTotal?: boolean;
}

export const Card = styled.div<Props>`
  background: ${({ isTotal }) => (isTotal ? "var(--green)" : "var(--shape)")};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.p<Props>`
  color: ${({ isTotal }) => (isTotal ? "var(--shape)" : "var(--text-title)")};
`;

export const Value = styled.strong<Props>`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
  color: ${({ isTotal }) => (isTotal ? "var(--shape)" : "var(--text-title)")};
`;

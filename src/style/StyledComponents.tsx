import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Title = styled.h1`
  color: #272746;
  text-align: center;
`;

export const Divider = styled.hr`
  border-style: solid #272746;
  border-width: 2px;
  width: 100%;
`;

export const FormProducts = styled.form`
  
`;

export const InputProducts = styled.input`
  ${({type})=>type}
`;

export const Table = styled.table`
  background-color: #414141;
  width: 50%;
  border-radius: 15px;
  color: white;
  padding: 0.5rem;
  text-align: center;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background: #ff00ff;
  }
`;

export const Btn = styled.button``;

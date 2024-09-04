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
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  @media (width < 780px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const InputProducts = styled.input`
  ${({ type }) => type};
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #adadad;
  outline: none;
  &:focus {
    background-color: #dfdfdf;
  }
  &[type="submit"] {
    background-color: #272746;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-align: center;

    &:active {
      scale: 0.95;
    }
  }
`;

export const Table = styled.table`
  margin-top: 3rem;
  width: 50%;
  color: white;
  padding: 0.3rem;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0 2px;

  @media (width < 780px) {
    width: 100%;
  }
`;

export const Thead = styled.thead`
  background-color: #050505;
`;

export const Tbody = styled.tbody`
  color: #231f2c;
  font-weight: bold;
`;

export const Row = styled.tr<{ $background: string }>`
  height: 40px;
  background-color: ${({ $background }) => $background};
  &:nth-child(even) {
    background-color: #b9b9b9;
  }
`;

export const Btn = styled.button<{ $background: string }>`
  background-color: ${({ $background }) => $background};
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:active {
    scale: 0.95;
  }
`;

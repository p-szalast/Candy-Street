import styled from "styled-components";

export const ButtonLittle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  border-radius: 100px;
  background-color: white;
  height: 1.5rem;
  width: 1.5rem;
  flex: 0 0 auto;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 8rem;
  height: 2.5rem;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";
import { Container, Item } from "../../common/styles/componentsStyles";

export const FormItem = styled(Item)`
  flex-direction: column;
  margin: 0 1rem;
`;

export const FormContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 12rem 0 12rem;
  gap: 1rem;
  margin-bottom: 2rem;
`;

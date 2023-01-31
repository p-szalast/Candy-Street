import styled from "styled-components";
import { Container, Item } from "../../common/styles/componentsStyles";
import { theme } from "../../common/styles/theme";

export const FormItem = styled(Item)`
  flex-direction: column;
  margin: 0 1rem;

  @media only screen and ${theme.devices.mobileXS} {
    padding: 1rem 0 0 0;
  } ;
`;

export const FormContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 12rem 0 12rem;
  gap: 1rem;
  margin-bottom: 2rem;

  @media only screen and ${theme.devices.mobileXS} {
    grid-template-columns: 1fr;
    padding: 1rem 0 0 0;
  } ;
`;

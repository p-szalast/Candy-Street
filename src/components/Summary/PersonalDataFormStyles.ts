import styled from "styled-components";
import { Container, Item } from "../../common/styles/componentsStyles";

export const FormItem = styled(Item)`
  flex-direction: column;
  margin: 0 ${({ theme }) => theme.spacing.basic};

  @media only screen and ${({ theme }) => theme.devices.mobileXS} {
    padding: ${({ theme }) => theme.spacing.basic} 0 0 0;
  } ;
`;

export const FormContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${({ theme }) => theme.spacing.basic} 12rem 0 12rem;
  gap: ${({ theme }) => theme.spacing.basic};
  margin-bottom: ${({ theme }) => theme.spacing.two};

  @media only screen and ${({ theme }) => theme.devices.mobileXS} {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.basic} 0 0 0;
  } ;
`;

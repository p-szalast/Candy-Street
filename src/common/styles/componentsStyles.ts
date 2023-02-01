import styled, { css } from "styled-components";
import backgroundImage from "../../assets/background.png";

/// Page

export const StyledPage = styled.main`
  margin-top: ${({ theme }) => theme.heights.header};
  background: linear-gradient(
      rgba(207, 187, 203, 0.81),
      rgba(207, 187, 203, 0.81)
    ),
    url(${backgroundImage}) no-repeat top center fixed;
  background-size: cover;
  height: calc(
    100vh - ${({ theme }) => theme.heights.footer} -
      ${({ theme }) => theme.heights.header}
  );
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.basic};
  overflow: auto;
  color: ${({ theme }) => theme.colors.background};
  min-width: ${({ theme }) => theme.minPageWidth};
  z-index: 1;
`;

export const Item = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacing.basic};
  padding: ${({ theme }) => theme.spacing.basic};
  opacity: 0.9;
  background: ${({ theme }) => theme.colors.background};
  gap: ${({ theme }) => theme.spacing.half};
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.items};
  color: ${({ theme }) => theme.colors.text};
`;

export const TotalAmountItem = styled(Item)`
  justify-content: center;
`;

//// Text
export const PageHeading = styled.h2`
  text-align: left;
  margin-left: ${({ theme }) => theme.spacing.basicEnlarged};
  font-weight: 300;
`;

///Image

export const Image = styled.img`
  object-fit: cover;
  height: 10rem;
  width: 10rem;
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.borderRadius.items};

  @media only screen and ${({ theme }) => theme.devices.tabletS} {
    height: 8rem;
    width: 8rem;
  }
`;

/// Labels/Inputs

export const Label = styled.label`
  font-family: Rubik, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.enlarged};
  font-weight: bold;
  width: 14rem;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.items};
  font-size: ${({ theme }) => theme.fontSize.enlarged};
  color: ${({ theme }) => theme.colors.grey};
  width: 14rem;
  height: 2rem;
  padding: ${({ theme }) => theme.spacing.half};

  @media only screen and ${({ theme }) => theme.devices.mobileXS} {
    padding: ${({ theme }) => theme.spacing.half}; 0;
  } ;
`;

export const Select = styled.select`
  font-family: Rubik, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.enlarged};
  border-radius: ${({ theme }) => theme.borderRadius.items};
`;

///Buttons

export const ButtonLittle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.buttonsLittle};
  background-color: ${({ theme }) => theme.colors.background};
  height: 1.5rem;
  width: 1.5rem;
  flex: 0 0 auto;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.quarter};
  width: 8rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.buttons};
  padding: ${({ theme }) => theme.spacing.half}
    ${({ theme }) => theme.spacing.basic};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.regular};
  text-decoration: none;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

//Containers

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.half};
  align-items: center;
  justify-content: center;
`;

export const VFlexBox = styled(Container)<{ $hasError?: boolean }>`
  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      color: ${theme.colors.error};
    `}

  flex-direction: column;
`;

export const BtnsContainer = styled(Container)`
  margin: auto ${({ theme }) => theme.spacing.two};
  justify-content: end;
`;

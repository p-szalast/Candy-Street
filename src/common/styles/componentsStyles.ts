import styled from "styled-components";
import backgroundImage from "../../assets/background.png";

/// Page

export const StyledPage = styled.main`
  margin-top: 5rem;
  background: linear-gradient(
      rgba(207, 187, 203, 0.81),
      rgba(207, 187, 203, 0.81)
    ),
    url(${backgroundImage}) no-repeat top center fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  min-width: 600px;
  padding-bottom: 5rem;
  overflow: auto;
  color: #fff;
`;

export const Item = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  background: #fff;
  opacity: 90%;
  gap: 0.5rem;
  border: 0px solid #fff;
  border-radius: 10px;
  color: black;
`;

export const TotalAmountItem = styled(Item)`
  justify-content: center;
`;

//// Text
export const PageHeading = styled.h2`
  text-align: left;
  margin-left: 1.5rem;
  font-weight: 300;
`;

///Image

export const Image = styled.img`
  object-fit: cover;
  height: 10rem;
  width: 10rem;
  border: 0px solid #fff;
  border-radius: 10px;
`;

/// Label/Input

export const Label = styled.label`
  font-family: Rubik, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  width: 14rem;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 20px;
  font-size: 1.2rem;
  color: #444;
  width: 14rem;
  height: 2rem;
  padding: 0.5rem;
`;

///Buttons

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
  border: 1px solid #eee;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

//Containers

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const VFlexBox = styled(Container)`
  flex-direction: column;
`;

export const BtnsContainer = styled(Container)`
  margin: auto 2rem;
  justify-content: end;
`;

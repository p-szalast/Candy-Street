import React from "react";
import StyledButton from "./ButtonStyles";

const Button: React.FC<{ name: string }> = (props) => {
  return <StyledButton>{props.name}</StyledButton>;
};

export default Button;

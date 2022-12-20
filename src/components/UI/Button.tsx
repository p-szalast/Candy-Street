import React from "react";
import StyledButton from "./ButtonStyles";

const Button: React.FC<{ name: string; className?: string; type?: string }> = (
  props
) => {
  return (
    <StyledButton className={props.className || ""}>{props.name}</StyledButton>
  );
};

export default Button;

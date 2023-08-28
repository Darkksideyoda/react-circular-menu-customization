import styled from "styled-components";

interface Props {
  $size?: number;
  $borderHexColor?:string;
  $borderWidth?:number;
  $backgroundHexColor?:string;
  $textHexColor?:string;
}

export const StyledCircleButton = <T extends "a" | "button">(tag: T) => styled(
  tag
)<Props>`
  text-decoration: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: unset;
  padding: 0.5rem;
  transition: all 0.5s;
  ${({ $size,$backgroundHexColor,$borderHexColor,$borderWidth,$textHexColor }) => `
    width: ${$size}rem;
    height: ${$size}rem;
    border: ${$borderWidth}rem solid #${$borderHexColor};
    background: #${$backgroundHexColor};
    color: #${$textHexColor};

  &:is(:hover, :focus, :active) {
    color: #${$backgroundHexColor};
    background: #${$textHexColor};
  }
  `}

`;

export const StyledButton = StyledCircleButton("button");
export const StyledLink = StyledCircleButton("a");

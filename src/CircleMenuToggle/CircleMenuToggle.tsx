import React, { FC, ReactNode } from "react";
import {
  StyledCircleMenuToggle,
} from "./StyledCircleMenuToggle";

interface Props {
  size: number;
  menuActive: boolean;
  toggleMenu: () => void;
  className?: string;
  children?:ReactNode
  borderHexColor?:string;
  borderWidth?:number;
  backgroundHexColor?:string;
  textHexColor?:string;
}

export const CircleMenuToggle: FC<Props> = ({
  size = 1,
  menuActive = false,
  className,
  toggleMenu,
  children,
  backgroundHexColor,
  borderHexColor,
  borderWidth,
  textHexColor,
}) => {
  return (
    <StyledCircleMenuToggle
      className={className}
      onClick={toggleMenu}
      menuActive={menuActive}
      size={size}
      backgroundHexColor={backgroundHexColor} borderHexColor={borderHexColor} borderWidth={borderWidth} textHexColor={textHexColor} 
    >
      {children}
    </StyledCircleMenuToggle>
  );
};

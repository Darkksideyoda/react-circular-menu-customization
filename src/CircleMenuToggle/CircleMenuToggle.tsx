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
}

export const CircleMenuToggle: FC<Props> = ({
  size = 1,
  menuActive = false,
  className,
  toggleMenu,
  children
}) => {
  return (
    <StyledCircleMenuToggle
      className={className}
      onClick={toggleMenu}
      menuActive={menuActive}
      size={size}
    >
      {children}
    </StyledCircleMenuToggle>
  );
};

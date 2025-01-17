import React, { CSSProperties, FC, MouseEvent, ReactNode } from "react";
import { TooltipPlacement } from "../Tooltip/library/types";
import { StyledButton, StyledLink } from "./StyledCircleButton";

export interface CircleButtonProps {
  size: number;
  link?: string;
  tooltip?: string;
  tooltipPlacement?: TooltipPlacement;
  target?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  borderHexColor?:string;
  borderWidth?:number;
  backgroundHexColor?:string;
  textHexColor?:string;
}

export const CircleButton: FC<CircleButtonProps> = (props) => {
  const {
    link,
    backgroundHexColor,
    borderHexColor,
    borderWidth,
    textHexColor,
    target,
    tooltip,
    tooltipPlacement,
    onClick,
    size,
    ...commonProps
  } = props;

  return link ? (
    <StyledLink {...commonProps} $backgroundHexColor={backgroundHexColor} $borderHexColor={borderHexColor} $borderWidth={borderWidth} $textHexColor={textHexColor} $size={size} href={link} target={target} />
  ) : (
    <StyledButton {...commonProps} $backgroundHexColor={backgroundHexColor} $borderHexColor={borderHexColor} $borderWidth={borderWidth} $textHexColor={textHexColor}  $size={size} onClick={onClick} />
  );
};

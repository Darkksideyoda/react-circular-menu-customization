import React, { FC } from "react";
import { CircleButton, CircleButtonProps } from "../CircleButton/CircleButton";
import { Tooltip } from "../Tooltip/Tooltip";
import { StyledCircleMenuItem } from "./StyledCircleMenuItem";

export interface CircleMenuItemProps extends Omit<CircleButtonProps, "size"> {
  size?: number;
  radius?: number;
  menuActive?: boolean;
  rotationAngle?: number;
  borderHexColor?:string;
  borderWidth?:number;
  backgroundHexColor?:string;
  textHexColor?:string;
}

export const CircleMenuItem: FC<CircleMenuItemProps> = ({
  size = 2,
  backgroundHexColor,
  borderHexColor,
  borderWidth,
  textHexColor,
  radius = 1,
  menuActive = false,
  rotationAngle = 0,
  children,
  tooltip,
  tooltipPlacement,
  ...circleButtonProps
}) => (
  <StyledCircleMenuItem
    $radius={radius}
    menuActive={menuActive}
    rotationAngle={rotationAngle}
  >
    <Tooltip title={tooltip ?? ""} placement={tooltipPlacement}>
      <CircleButton size={size} backgroundHexColor={backgroundHexColor} borderHexColor={borderHexColor} borderWidth={borderWidth} textHexColor={textHexColor}   {...circleButtonProps}>
        {children}
      </CircleButton>
    </Tooltip>
  </StyledCircleMenuItem>
);

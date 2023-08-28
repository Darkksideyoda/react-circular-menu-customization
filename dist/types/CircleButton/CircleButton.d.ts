import { CSSProperties, FC, MouseEvent, ReactNode } from "react";
import { TooltipPlacement } from "../Tooltip/library/types";
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
    borderHexColor?: string;
    borderWidth?: number;
    backgroundHexColor?: string;
    textHexColor?: string;
}
export declare const CircleButton: FC<CircleButtonProps>;

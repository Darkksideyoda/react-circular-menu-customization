import { FC, ReactElement, ReactNode } from "react";
interface Props {
    startAngle: number;
    rotationAngle: number;
    rotationAngleInclusive?: boolean;
    radius?: number;
    itemSize?: number;
    className?: string;
    menuToggleElement?: ReactElement;
    menuToggleClassName?: string;
    onMenuToggle?: (toggleState: boolean) => void;
    open?: boolean;
    children: ReactNode;
    circleMenuToggleItem: ReactNode;
}
export declare const CircleMenu: FC<Props>;
export {};

import { FC, ReactNode } from "react";
interface Props {
    size: number;
    menuActive: boolean;
    toggleMenu: () => void;
    className?: string;
    children?: ReactNode;
    borderHexColor?: string;
    borderWidth?: number;
    backgroundHexColor?: string;
    textHexColor?: string;
}
export declare const CircleMenuToggle: FC<Props>;
export {};

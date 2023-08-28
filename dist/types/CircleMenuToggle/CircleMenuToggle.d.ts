import { FC, ReactNode } from "react";
interface Props {
    size: number;
    menuActive: boolean;
    toggleMenu: () => void;
    className?: string;
    children?: ReactNode;
}
export declare const CircleMenuToggle: FC<Props>;
export {};

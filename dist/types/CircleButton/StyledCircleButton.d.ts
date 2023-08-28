/// <reference types="react" />
interface Props {
    $size: number;
}
export declare const StyledCircleButton: <T extends "a" | "button">(tag: T) => import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<T extends import("styled-components/dist/types").KnownTarget ? import("react").ComponentPropsWithRef<T> : import("styled-components/dist/types").BaseObject, Props>>;
export declare const StyledButton: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, Props>>;
export declare const StyledLink: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<Omit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    ref?: ((instance: HTMLAnchorElement | null) => void) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
}, Props>>;
export {};

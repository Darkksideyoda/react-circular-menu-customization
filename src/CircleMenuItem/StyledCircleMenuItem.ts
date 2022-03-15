import styled from "styled-components";

interface Props {
  menuActive: boolean;
  rotationAngle: number;
  $radius: number;
}

export const StyledCircleMenuItem = styled.li<Props>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;

  ${({ menuActive }) => !menuActive && `z-index: -1;`}

  ${({ menuActive, rotationAngle, $radius }) =>
    menuActive &&
    `
      transform: translateY(-50%) rotate(${rotationAngle}deg)
        translate(${$radius}rem) rotate(${-rotationAngle}deg);
      visibility: visible;
      opacity: 1;
    `}
`;

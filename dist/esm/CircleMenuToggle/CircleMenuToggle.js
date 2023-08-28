import React from "react";
import { StyledCircleMenuToggle, } from "./StyledCircleMenuToggle";
export var CircleMenuToggle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.menuActive, menuActive = _c === void 0 ? false : _c, className = _a.className, toggleMenu = _a.toggleMenu, children = _a.children, backgroundHexColor = _a.backgroundHexColor, borderHexColor = _a.borderHexColor, borderWidth = _a.borderWidth, textHexColor = _a.textHexColor;
    return (React.createElement(StyledCircleMenuToggle, { className: className, onClick: toggleMenu, menuActive: menuActive, size: size, backgroundHexColor: backgroundHexColor, borderHexColor: borderHexColor, borderWidth: borderWidth, textHexColor: textHexColor }, children));
};

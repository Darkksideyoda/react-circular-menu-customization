"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleMenuToggle = void 0;
var react_1 = __importDefault(require("react"));
var StyledCircleMenuToggle_1 = require("./StyledCircleMenuToggle");
var CircleMenuToggle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.menuActive, menuActive = _c === void 0 ? false : _c, className = _a.className, toggleMenu = _a.toggleMenu, children = _a.children, backgroundHexColor = _a.backgroundHexColor, borderHexColor = _a.borderHexColor, borderWidth = _a.borderWidth, textHexColor = _a.textHexColor;
    return (react_1.default.createElement(StyledCircleMenuToggle_1.StyledCircleMenuToggle, { className: className, onClick: toggleMenu, menuActive: menuActive, size: size, backgroundHexColor: backgroundHexColor, borderHexColor: borderHexColor, borderWidth: borderWidth, textHexColor: textHexColor }, children));
};
exports.CircleMenuToggle = CircleMenuToggle;

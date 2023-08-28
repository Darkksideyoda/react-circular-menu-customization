"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleMenuToggle = void 0;
var react_1 = __importDefault(require("react"));
var StyledCircleMenuToggle_1 = require("./StyledCircleMenuToggle");
var CircleMenuToggle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.menuActive, menuActive = _c === void 0 ? false : _c, className = _a.className, toggleMenu = _a.toggleMenu, children = _a.children;
    return (react_1.default.createElement(StyledCircleMenuToggle_1.StyledCircleMenuToggle, { className: className, onClick: toggleMenu, menuActive: menuActive, size: size }, children));
};
exports.CircleMenuToggle = CircleMenuToggle;

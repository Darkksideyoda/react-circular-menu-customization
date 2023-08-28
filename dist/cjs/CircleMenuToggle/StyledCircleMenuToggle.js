"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCircleMenuToggle = exports.StyledCircleMenuBurgerBar = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var CircleButton_1 = require("../CircleButton/CircleButton");
exports.StyledCircleMenuBurgerBar = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  width: 1.2em;\n  height: 0.2rem;\n  background: #000000;\n  margin-bottom: 0.3em;\n  border-radius: 1em;\n  transition: all 0.5s;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  display: block;\n  width: 1.2em;\n  height: 0.2rem;\n  background: #000000;\n  margin-bottom: 0.3em;\n  border-radius: 1em;\n  transition: all 0.5s;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));
exports.StyledCircleMenuToggle = (0, styled_components_1.default)(CircleButton_1.CircleButton)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  flex-direction: column;\n  z-index: 103;\n\n  &:is(:hover, :focus, :active) > ", " {\n    background: #ffffff;\n  }\n\n  ", "\n"], ["\n  position: relative;\n  flex-direction: column;\n  z-index: 103;\n\n  &:is(:hover, :focus, :active) > ", " {\n    background: #ffffff;\n  }\n\n  ", "\n"])), exports.StyledCircleMenuBurgerBar, function (_a) {
    var menuActive = _a.menuActive;
    return menuActive && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", ":nth-child(1) {\n        transform: translate(-0.1em, 0.17em) rotateZ(-40deg);\n        width: 1.2em;\n      }\n      ", ":nth-child(2) {\n        opacity: 0;\n      }\n      ", ":nth-child(3) {\n        transform: translate(-0.1em, -0.17em) rotateZ(40deg);\n        width: 1.2em;\n      }\n    "], ["\n      ", ":nth-child(1) {\n        transform: translate(-0.1em, 0.17em) rotateZ(-40deg);\n        width: 1.2em;\n      }\n      ", ":nth-child(2) {\n        opacity: 0;\n      }\n      ", ":nth-child(3) {\n        transform: translate(-0.1em, -0.17em) rotateZ(40deg);\n        width: 1.2em;\n      }\n    "])), exports.StyledCircleMenuBurgerBar, exports.StyledCircleMenuBurgerBar, exports.StyledCircleMenuBurgerBar);
});
var templateObject_1, templateObject_2, templateObject_3;

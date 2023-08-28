"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLink = exports.StyledButton = exports.StyledCircleButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var StyledCircleButton = function (tag) { return (0, styled_components_1.default)(tag)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: unset;\n  padding: 0.5rem;\n  transition: all 0.5s;\n  ", "\n\n"], ["\n  text-decoration: none;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: unset;\n  padding: 0.5rem;\n  transition: all 0.5s;\n  ", "\n\n"])), function (_a) {
    var $size = _a.$size, $backgroundHexColor = _a.$backgroundHexColor, $borderHexColor = _a.$borderHexColor, $borderWidth = _a.$borderWidth, $textHexColor = _a.$textHexColor;
    return "\n    width: ".concat($size, "rem;\n    height: ").concat($size, "rem;\n    border: ").concat($borderWidth, "rem solid #").concat($borderHexColor, ";\n    background: #").concat($backgroundHexColor, ";\n    color: #").concat($textHexColor, ";\n\n  &:is(:hover, :focus, :active) {\n    color: #").concat($backgroundHexColor, ";\n    background: #").concat($textHexColor, ";\n  }\n  ");
}); };
exports.StyledCircleButton = StyledCircleButton;
exports.StyledButton = (0, exports.StyledCircleButton)("button");
exports.StyledLink = (0, exports.StyledCircleButton)("a");
var templateObject_1;

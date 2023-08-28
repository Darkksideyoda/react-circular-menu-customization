"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCircleMenuItem = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.StyledCircleMenuItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s;\n  z-index: 102;\n\n  ", "\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s;\n  z-index: 102;\n\n  ", "\n"])), function (_a) {
    var menuActive = _a.menuActive, rotationAngle = _a.rotationAngle, $radius = _a.$radius;
    return menuActive &&
        "\n      transform: translate(-50%, -50%) rotate(".concat(rotationAngle, "deg)\n        translate(").concat($radius, "rem) rotate(").concat(-rotationAngle, "deg);\n      visibility: visible;\n      opacity: 1;\n    ");
});
var templateObject_1;

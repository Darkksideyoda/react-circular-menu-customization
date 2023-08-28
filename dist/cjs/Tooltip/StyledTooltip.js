"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTooltip = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.StyledTooltip = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background: #000000;\n  border-radius: 0.3rem;\n  color: #ffffff;\n  padding: 0.25rem 0.5rem 0.3rem 0.5rem;\n  z-index: 104;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background: #000000;\n  border-radius: 0.3rem;\n  color: #ffffff;\n  padding: 0.25rem 0.5rem 0.3rem 0.5rem;\n  z-index: 104;\n"])));
var templateObject_1;

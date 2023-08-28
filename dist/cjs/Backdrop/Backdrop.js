"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backdrop = void 0;
var react_1 = __importDefault(require("react"));
var StyledBackdrop_1 = require("./StyledBackdrop");
var Backdrop = function (props) { return (react_1.default.createElement(react_1.default.Fragment, null,
    props.active && react_1.default.createElement(StyledBackdrop_1.StyledBackdrop, { onClick: props.onClick }),
    react_1.default.createElement(StyledBackdrop_1.StyledBackdropFocus, { className: props.className }, props.children))); };
exports.Backdrop = Backdrop;

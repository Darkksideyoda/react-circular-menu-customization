"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleButton = void 0;
var react_1 = __importDefault(require("react"));
var StyledCircleButton_1 = require("./StyledCircleButton");
var CircleButton = function (props) {
    var link = props.link, target = props.target, tooltip = props.tooltip, tooltipPlacement = props.tooltipPlacement, onClick = props.onClick, size = props.size, commonProps = __rest(props, ["link", "target", "tooltip", "tooltipPlacement", "onClick", "size"]);
    return link ? (react_1.default.createElement(StyledCircleButton_1.StyledLink, __assign({}, commonProps, { "$size": size, href: link, target: target }))) : (react_1.default.createElement(StyledCircleButton_1.StyledButton, __assign({}, commonProps, { "$size": size, onClick: onClick })));
};
exports.CircleButton = CircleButton;

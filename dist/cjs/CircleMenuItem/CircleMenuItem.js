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
exports.CircleMenuItem = void 0;
var react_1 = __importDefault(require("react"));
var CircleButton_1 = require("../CircleButton/CircleButton");
var Tooltip_1 = require("../Tooltip/Tooltip");
var StyledCircleMenuItem_1 = require("./StyledCircleMenuItem");
var CircleMenuItem = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 2 : _b, _c = _a.radius, radius = _c === void 0 ? 1 : _c, _d = _a.menuActive, menuActive = _d === void 0 ? false : _d, _e = _a.rotationAngle, rotationAngle = _e === void 0 ? 0 : _e, children = _a.children, tooltip = _a.tooltip, tooltipPlacement = _a.tooltipPlacement, circleButtonProps = __rest(_a, ["size", "radius", "menuActive", "rotationAngle", "children", "tooltip", "tooltipPlacement"]);
    return (react_1.default.createElement(StyledCircleMenuItem_1.StyledCircleMenuItem, { "$radius": radius, menuActive: menuActive, rotationAngle: rotationAngle },
        react_1.default.createElement(Tooltip_1.Tooltip, { title: tooltip !== null && tooltip !== void 0 ? tooltip : "", placement: tooltipPlacement },
            react_1.default.createElement(CircleButton_1.CircleButton, __assign({ size: size }, circleButtonProps), children))));
};
exports.CircleMenuItem = CircleMenuItem;

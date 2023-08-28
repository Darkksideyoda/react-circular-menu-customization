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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleMenu = void 0;
var react_1 = __importStar(require("react"));
var Backdrop_1 = require("../Backdrop/Backdrop");
var CircleMenuItem_1 = require("../CircleMenuItem/CircleMenuItem");
var CircleMenuToggle_1 = require("../CircleMenuToggle/CircleMenuToggle");
var StyledCircleMenu_1 = require("./StyledCircleMenu");
var CircleMenu = function (_a) {
    var _b = _a.rotationAngleInclusive, rotationAngleInclusive = _b === void 0 ? true : _b, _c = _a.radius, radius = _c === void 0 ? 2 : _c, _d = _a.itemSize, itemSize = _d === void 0 ? 2 : _d, className = _a.className, menuToggleElement = _a.menuToggleElement, menuToggleClassName = _a.menuToggleClassName, onMenuToggle = _a.onMenuToggle, open = _a.open, circleMenuToggleItem = _a.circleMenuToggleItem, props = __rest(_a, ["rotationAngleInclusive", "radius", "itemSize", "className", "menuToggleElement", "menuToggleClassName", "onMenuToggle", "open", "circleMenuToggleItem"]);
    var _e = (0, react_1.useState)(open !== null && open !== void 0 ? open : false), menuActive = _e[0], setMenuActive = _e[1];
    var childrenCount = react_1.Children.count(props.children);
    var itemCount = rotationAngleInclusive ? childrenCount - 1 : childrenCount;
    (0, react_1.useEffect)(function () { return setMenuActive(open !== null && open !== void 0 ? open : false); }, [open]);
    var toggleMenu = function () {
        var updatedMenuState = !menuActive;
        setMenuActive(updatedMenuState);
        onMenuToggle === null || onMenuToggle === void 0 ? void 0 : onMenuToggle(updatedMenuState);
    };
    var menuToggle = menuToggleElement ? ((0, react_1.cloneElement)(menuToggleElement, {
        onClick: function () {
            var _a, _b;
            (_b = (_a = menuToggleElement.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
            toggleMenu();
        },
    })) : (react_1.default.createElement(CircleMenuToggle_1.CircleMenuToggle, { className: menuToggleClassName, menuActive: menuActive, size: itemSize, toggleMenu: toggleMenu }, circleMenuToggleItem));
    return (react_1.default.createElement(Backdrop_1.Backdrop, { className: className, active: menuActive, onClick: toggleMenu },
        menuToggle,
        react_1.default.createElement(StyledCircleMenu_1.StyledCircleMenuData, null, react_1.Children.map(props.children, function (child, index) {
            // Calculating angle
            var angle = props.startAngle;
            var increment = 0;
            if (childrenCount > 1) {
                increment = Math.round(props.rotationAngle / itemCount);
            }
            angle += index * increment;
            return (react_1.default.createElement(CircleMenuItem_1.CircleMenuItem, __assign({ key: "cm-item-" + index }, child.props, { size: itemSize, menuActive: menuActive, radius: radius, rotationAngle: angle })));
        }))));
};
exports.CircleMenu = CircleMenu;

"use strict";
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
exports.Tooltip = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
var tooltip_element_props_1 = require("./functions/tooltip-element-props");
var tooltip_transform_hook_1 = require("./functions/tooltip-transform-hook");
var types_1 = require("./library/types");
var StyledTooltip_1 = require("./StyledTooltip");
var Tooltip = function (_a) {
    var title = _a.title, _b = _a.placement, placement = _b === void 0 ? types_1.TooltipPlacement.Top : _b, children = _a.children;
    var _c = (0, react_1.useState)(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = (0, react_1.useState)(null), tooltip = _d[0], setTooltip = _d[1];
    var wrapperRef = (0, react_1.useRef)(null);
    var tooltipStyles = (0, tooltip_transform_hook_1.useTooltipTransform)(wrapperRef.current, tooltip, placement);
    var openTooltip = function () { return !isOpen && setIsOpen(true); };
    var closeTooltip = function () { return isOpen && setIsOpen(false); };
    if (!title || !(0, react_1.isValidElement)(children)) {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
    return (react_1.default.createElement("div", { ref: wrapperRef },
        react_1.default.createElement(react_1.default.Fragment, null,
            (0, react_1.cloneElement)(react_1.Children.only(children), (0, tooltip_element_props_1.getTooltipElementProps)(children.props, openTooltip, closeTooltip)),
            isOpen &&
                (0, react_dom_1.createPortal)(react_1.default.createElement(StyledTooltip_1.StyledTooltip, { style: tooltipStyles, ref: function (element) { return element && setTooltip(element); }, role: "tooltip" }, title), document.getElementsByTagName("body")[0]))));
};
exports.Tooltip = Tooltip;

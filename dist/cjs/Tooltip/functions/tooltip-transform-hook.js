"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTooltipTransform = void 0;
var react_1 = require("react");
var types_1 = require("../library/types");
var tooltipPadding = 5;
var useTooltipTransform = function (wrapper, tooltip, placement) {
    var calculateTransformStyle = function () {
        if (!wrapper || !tooltip) {
            return {};
        }
        var wrapperBoundingRect = wrapper.getBoundingClientRect();
        var wrapperWidth = wrapperBoundingRect.right - wrapperBoundingRect.left;
        var wrapperHeight = wrapperBoundingRect.bottom - wrapperBoundingRect.top;
        var tooltipBoundingRect = tooltip.getBoundingClientRect();
        var tooltipWidth = tooltipBoundingRect.right - tooltipBoundingRect.left;
        var tooltipHeight = tooltipBoundingRect.bottom - tooltipBoundingRect.top;
        var left = wrapperBoundingRect.left + wrapperWidth / 2 - tooltipWidth / 2;
        var top = wrapperBoundingRect.top + wrapperHeight / 2 - tooltipHeight / 2;
        switch (placement) {
            case types_1.TooltipPlacement.Top:
                top = wrapperBoundingRect.top - tooltipHeight - tooltipPadding;
                break;
            case types_1.TooltipPlacement.Bottom:
                top = wrapperBoundingRect.bottom + tooltipPadding;
                break;
            case types_1.TooltipPlacement.Left:
                left = wrapperBoundingRect.left - tooltipWidth - tooltipPadding;
                break;
            case types_1.TooltipPlacement.Right:
                left = wrapperBoundingRect.right + tooltipPadding;
                break;
        }
        return {
            transform: "translate3d(".concat(left, "px, ").concat(top, "px, 0px)"),
        };
    };
    return (0, react_1.useMemo)(function () { return calculateTransformStyle(); }, [wrapper, tooltip]);
};
exports.useTooltipTransform = useTooltipTransform;

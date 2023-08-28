"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonA11yProps = void 0;
var buttonA11yProps = function (onClick) { return ({
    role: "button",
    tabIndex: 0,
    onKeyPress: function (keyboardEvent) {
        if (["Enter", " ", "SpaceBar"].includes(keyboardEvent.key)) {
            keyboardEvent.preventDefault();
            onClick();
        }
    },
}); };
exports.buttonA11yProps = buttonA11yProps;

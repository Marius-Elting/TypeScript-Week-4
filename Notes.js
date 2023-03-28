"use strict";
// Literale Typen
Object.defineProperty(exports, "__esModule", { value: true });
const alignText = (s, alignment) => {
    if (alignment === "left") {
        return s + "....";
    }
    if (alignment === "right") {
        return "...." + s;
    }
    else {
        return ".." + s + "..";
    }
};
alignText("ananas", "center");
const aBoolean = () => {
    return true;
};
//# sourceMappingURL=Notes.js.map
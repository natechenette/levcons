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
const React = __importStar(require("react"));
const SvgCalendar = (_a) => {
    var { color = "#000" } = _a, props = __rest(_a, ["color"]);
    return (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24" }, props),
        React.createElement("rect", { width: 18.5, height: 16.5, x: 2.75, y: 4.75, stroke: color, strokeWidth: 1.5, rx: 2.25 }),
        React.createElement("path", { stroke: color, strokeWidth: 1.5, d: "M2 8.25h19.636" }),
        React.createElement("path", { fill: color, d: "M17.477 3a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V3zM7.66 3a.75.75 0 0 0-1.5 0zm-1.5 0v1h1.5V3zM6.25 11.5h1.5V13h-1.5zM8.75 11.5h1.5V13h-1.5zM11.25 11.5h1.5V13h-1.5zM13.75 11.5h1.5V13h-1.5zM16.25 11.5h1.5V13h-1.5zM6.25 14h1.5v1.5h-1.5zM8.75 14h1.5v1.5h-1.5zM11.25 14h1.5v1.5h-1.5zM13.75 14h1.5v1.5h-1.5zM16.25 14h1.5v1.5h-1.5zM6.25 16.5h1.5V18h-1.5zM8.75 16.5h1.5V18h-1.5zM11.25 16.5h1.5V18h-1.5z" })));
};
exports.default = SvgCalendar;

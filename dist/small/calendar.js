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
const React = __importStar(require("react"));
const SvgCalendar = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", viewBox: "0 0 20 20" }, props),
    React.createElement("rect", { width: 14.5, height: 13.167, x: 2.75, y: 3.75, stroke: "#000", strokeWidth: 1.5, rx: 1.25 }),
    React.createElement("path", { stroke: "#000", strokeWidth: 1.5, d: "M2 7.583h16" }),
    React.createElement("path", { fill: "#000", d: "M14.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1.333h1.5V3zM6.75 3a.75.75 0 0 0-1.5 0zm-1.5 0v1.333h1.5V3z" })));
exports.default = SvgCalendar;

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
const SvgProgress = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none" }, props),
    React.createElement("rect", { width: 10.5, height: 10.5, x: 2.75, y: 2.75, stroke: "#000", strokeWidth: 1.5, rx: 5.25 }),
    React.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M5 8a3 3 0 1 0 3-3v3z", clipRule: "evenodd" })));
exports.default = SvgProgress;

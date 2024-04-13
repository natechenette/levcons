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
const SvgHome = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none" }, props),
    React.createElement("path", { stroke: "#000", strokeWidth: 1.5, d: "m3.23 7.75 6-4.695a1.25 1.25 0 0 1 1.54 0l6 4.695c.303.237.48.6.48.985V16c0 .69-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25V8.735c0-.385.177-.748.48-.985Z" }),
    React.createElement("path", { fill: "#000", d: "M8 14a2 2 0 1 1 4 0v3H8z" })));
exports.default = SvgHome;

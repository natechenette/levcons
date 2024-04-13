"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressIcon = exports.ProgressIconSmall = exports.ProgressIconMicro = void 0;
// Micro icons
var progress_1 = require("./micro/progress");
Object.defineProperty(exports, "ProgressIconMicro", { enumerable: true, get: function () { return __importDefault(progress_1).default; } });
// Small icons
var progress_2 = require("./small/progress");
Object.defineProperty(exports, "ProgressIconSmall", { enumerable: true, get: function () { return __importDefault(progress_2).default; } });
// Default icons
var progress_3 = require("./default/progress");
Object.defineProperty(exports, "ProgressIcon", { enumerable: true, get: function () { return __importDefault(progress_3).default; } });

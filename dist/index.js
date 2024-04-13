"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeIcon = exports.ProgressIcon = exports.HomeIconSmall = exports.ProgressIconSmall = exports.HomeIconMicro = exports.ProgressIconMicro = void 0;
// Micro icons
var progress_1 = require("./micro/progress");
Object.defineProperty(exports, "ProgressIconMicro", { enumerable: true, get: function () { return __importDefault(progress_1).default; } });
var home_1 = require("./micro/home");
Object.defineProperty(exports, "HomeIconMicro", { enumerable: true, get: function () { return __importDefault(home_1).default; } });
// Small icons
var progress_2 = require("./small/progress");
Object.defineProperty(exports, "ProgressIconSmall", { enumerable: true, get: function () { return __importDefault(progress_2).default; } });
var home_2 = require("./small/home");
Object.defineProperty(exports, "HomeIconSmall", { enumerable: true, get: function () { return __importDefault(home_2).default; } });
// Default icons
var progress_3 = require("./default/progress");
Object.defineProperty(exports, "ProgressIcon", { enumerable: true, get: function () { return __importDefault(progress_3).default; } });
var home_3 = require("./default/home");
Object.defineProperty(exports, "HomeIcon", { enumerable: true, get: function () { return __importDefault(home_3).default; } });

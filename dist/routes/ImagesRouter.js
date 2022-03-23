"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imagesController_1 = __importDefault(require("./../controllers/imagesController"));
var images = express_1.default.Router();
images.get("/:imageName", imagesController_1.default);
exports.default = images;

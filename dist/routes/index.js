"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ImagesRouter_1 = __importDefault(require("./ImagesRouter"));
var MainRouter = express_1.default.Router();
MainRouter.use("/images", ImagesRouter_1.default);
MainRouter.get("/", function (req, res) {
    res.send("hello to the image processing app");
});
exports.default = MainRouter;

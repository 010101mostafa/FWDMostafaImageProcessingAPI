"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.listen(3333, function () {
    return console.log("the server is running on port 3333 \napp link:  http://localhost:3333/");
});
app.get("/", function (req, res) {
    res.send("hello mostafa");
});
exports.default = app;

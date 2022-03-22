"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require("../"));
var supertest_1 = __importDefault(require("supertest"));
var request = (0, supertest_1.default)(__1.default);
describe("test image processing app ", function () {
    it("app startup and 404 not found working", function () {
        request.get("anyPosition").expect(404);
    });
});

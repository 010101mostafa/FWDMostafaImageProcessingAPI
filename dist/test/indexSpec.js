"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(require("../."));
var supertest_1 = __importDefault(require("supertest"));
var request = (0, supertest_1.default)(_1.default);
describe("test image processing app ", function () {
    it("app startup and 404 not found working", function () {
        request.get("/anyPosition").expect(404);
    });
    describe("test image router ", function () {
        it("test if the image not found ", function () {
            request.get("/images/anyname").expect(404);
        });
        it("test if one missing parameter set as default (full image)", function () {
            request.get("/images/encenadaport?h=155").expect(200);
        });
        it("test if one parameter isn't a number (bad request )", function () {
            request.get("/images/encenadaport?w=a&h=155").expect(400);
        });
        it("test if everything is right two parameter (OK)", function () {
            request.get("/images/encenadaport?w=400&h=155").expect(200);
        });
        it("test if everything is right no-parameter (OK)", function () {
            request.get("/images/encenadaport").expect(200);
        });
    });
});

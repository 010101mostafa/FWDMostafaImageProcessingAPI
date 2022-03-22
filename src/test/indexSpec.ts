import app from "../";
import supertest from "supertest";

const request = supertest(app);
describe("test image processing app ", () => {
  it("app startup and 404 not found working", () => {
    request.get("anyPosition").expect(404);
  });
});

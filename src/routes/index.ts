import express from "express";

import images from "./ImagesRouter";
const MainRouter = express.Router();

MainRouter.use("/images", images);

MainRouter.get("/", (req, res) => {
  res.send("hello to the image processing app");
});

export default MainRouter;

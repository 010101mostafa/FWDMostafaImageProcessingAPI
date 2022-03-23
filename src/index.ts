import express from "express";
import * as fs from "fs";
import path from "path";

import routers from "./routes/.";

const app = express();
app.listen(3333, () =>
  console.log(
    "the server is running on port 3333 \napp link:  http://localhost:3333/"
  )
);

app.use(routers);
app.use((req, res) => {
  const filePath = path.join(path.resolve("./"), "static files/NotFound.html");
  fs.stat(filePath, function (err, fileInfo) {
    if (err) {
      res.status(500);
      return;
    }
    if (fileInfo.isFile()) {
      res.status(404);
      res.sendFile(filePath);
    }
  });
});
export default app;

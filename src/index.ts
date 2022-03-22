import express from "express";
const app = express();
app.listen(3333, () =>
  console.log(
    "the server is running on port 3333 \napp link:  http://localhost:3333/"
  )
);
app.get("/", (req, res) => {
  res.send("hello mostafa");
});

export default app;

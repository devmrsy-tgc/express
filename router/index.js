import express from "express";

const app = express();
app.use(express.json())

app.get("v1", (req, res) => {
  res.send("v1 is working!!");
});

export default app;

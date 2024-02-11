import express from "express";

const app = express();
const PORT = 8000;
app.use(express.json());

app.get("/api", (req, res) => {
  res.send({
    success: true,
    data: [{ name: "temp" }],
  });
});

app.post("/api", (req, res) => {
  try {
    const { name } = req.body;

    if (!name) throw new Error("name is not present in payload");

    res.send({
      success: true,
      data: { name: name },
    });
  } catch (error) {
    console.log(error.message);
    res.send({
      success: false,
      error: error.message,
    });
  }
});

app.use("/*", (req, res) => {
  res.send({
    message: "server is running",
    baseUrl: "http://localhost:8000/api",
  });
});

try {
  app.listen(PORT, () =>
    console.log(`application is running on port number ${PORT}`)
  );
} catch (error) {
  console.log(error.message);
}

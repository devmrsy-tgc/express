import express from "express";

const app = express();
const PORT = 8000;
app.use(express.json());

app.get("/base-path", (req, res) => {
  res.send({
    success: true,
    data: [{ name: "temp" }],
  });
});

app.post("/base-path", (req, res) => {
  try {
    const { name } = req.body;
    res.send({
      success: true,
      data: [{ name: name }],
    });
  } catch (error) {
    console.log(error.message);
  }
});

try {
  app.listen(PORT, () =>
    console.log(`application is running on port number ${PORT}`)
  );
} catch (error) {
  console.log(error.message);
}

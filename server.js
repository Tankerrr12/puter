import express from "express";
import bodyParser from "body-parser";
import { AI } from "puter-js"; // assuming puter-js is installed

const app = express();
app.use(bodyParser.json());

// Endpoint for chat
app.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await AI.chat(message);
    res.json({ reply: response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Puter.js API running on port ${PORT}`));

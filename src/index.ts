import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, This is a express template!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

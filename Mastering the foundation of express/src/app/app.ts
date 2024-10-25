import express, { Request, Response } from "express";

const app = express();

// Parser
// convert json raw data
app.use(express.json());
// convert text data
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running at 5500");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Got the data");
});

export default app;

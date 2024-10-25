import express, { NextFunction, Request, Response } from "express";

const app = express();

// Parser
// convert json raw data
app.use(express.json());
// convert text data
app.use(express.text());

//Normal Get
app.get("/", (req: Request, res: Response) => {
  res.send("Server Running at 5500");
});

//Middlware used for check anything before hit the actual API
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

// Get with Id and sub Id
app.get("/:userId/:subId", logger, (req: Request, res: Response) => {
  console.log(req.params);
  //{ userId: '45', subId: '32' }
  res.send(req.params);
});

//Normal Post
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Got the data");
});

//create router
const userRouter = express.Router();
const courseRouter = express.Router();

// use router
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

// create api using user router
userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  res.json({
    success: true,
    message: "user created",
    data: user,
  });
});
// create api using user router
courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  res.json({
    success: true,
    message: "course created",
    data: course,
  });
});

export default app;

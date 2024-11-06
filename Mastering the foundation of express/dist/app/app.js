"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Parser
// convert json raw data
app.use(express_1.default.json());
// convert text data
app.use(express_1.default.text());
//Normal Get
app.get("/", (req, res) => {
    res.send("Server Running at 5500");
});
//Middlware used for check anything before hit the actual API
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// Get with Id and sub Id
app.get("/:userId/:subId", logger, (req, res) => {
    console.log(req.params);
    //{ userId: '45', subId: '32' }
    res.send(req.params);
});
//Normal Post
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Got the data");
});
//create router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// use router
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
// create api using user router
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    res.json({
        success: true,
        message: "user created",
        data: user,
    });
});
// create api using course router
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    res.json({
        success: true,
        message: "course created",
        data: course,
    });
});
exports.default = app;

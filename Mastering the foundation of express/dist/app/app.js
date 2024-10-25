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
app.get("/", (req, res) => {
    res.send("Server Running at 5500");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Got the data");
});
exports.default = app;

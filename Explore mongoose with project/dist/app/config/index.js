"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
const databaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT || "3000"; // Default to "3000" if PORT is not provided
// Optional: Add an additional runtime check to throw an error if DATABASE_URL is not defined
if (!databaseUrl) {
    throw new Error("DATABASE_URL must be defined in the environment variables");
}
exports.default = {
    port,
    database_url: databaseUrl,
};

import { Server } from "http";
import app from "./app";

const PORT = 5500;

let server: Server;

async function bootstrap() {
  server = app.listen(PORT, () => {
    console.log("Server running at port", PORT);
  });
}

bootstrap();

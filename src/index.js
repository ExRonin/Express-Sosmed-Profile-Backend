import Express from "express";
import Cors from "cors";
import BodyParser from "body-parser";
import { Route } from "./router";

const server = Express();
server.use(Cors());
server.use(BodyParser.json());

Route(server);

server.listen(7100, () => {
  console.log("Server start");
});

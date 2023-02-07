import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const port = 3333;
const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.listen({ port: port }).then(() => console.log("Server is running"));

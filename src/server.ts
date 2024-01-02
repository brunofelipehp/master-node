import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Http server listening on port http://localhost:3333");
  });

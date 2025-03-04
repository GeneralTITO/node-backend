import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import { PrismaClient } from "@prisma/client";
import {
  categoryRouter,
  ingredientRouter,
  recipeRouter,
  sessionRouter,
  userRouter,
} from "./routers";

const app: Application = express();
const prisma = new PrismaClient();

app.use(json());

// Defina suas rotas aqui
app.use("/categories", categoryRouter);
app.use("/ingredients", ingredientRouter);
app.use("/recipes", recipeRouter);
app.use("/sessions", sessionRouter);
app.use("/users", userRouter);

app.use(middlewares.handleError);

export default app;

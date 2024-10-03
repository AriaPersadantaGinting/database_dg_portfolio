import express from "express";
import { publicApi } from "../routes/public-api.js";
import { apiRoutes } from "../routes/api.js";
import cors from "cors";
import { errorMiddleware } from "../middleware/errorMiddleware.js";

export const app = express();

app.use(express.json());
app.use(cors());

app.use(publicApi);
app.use(apiRoutes);

app.use(errorMiddleware);

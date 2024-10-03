import { app } from "./application/app.js";
import { configDotenv } from "dotenv";
import { logger } from "./application/logger.js";

configDotenv();

const port = process.env.PORT;

app.use("/health", (req, res, next) => {
  res.status(200).send({ status: "200" });
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}!`);
});

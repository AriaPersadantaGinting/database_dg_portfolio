import { app } from "./application/app.js";
import { configDotenv } from "dotenv";
import { logger } from "./application/logger.js";
import { createServer } from "http";
import supabase from "./config/supabaseClient.js";

configDotenv();
console.info(supabase);

const port = process.env.PORT;

// Export a function handler for Vercel
const server = createServer(app);

export default (req, res) => {
  server.emit("request", req, res);
};

app.listen(port, () => {
  logger.info(`Server is running on port ${port}!`);
});

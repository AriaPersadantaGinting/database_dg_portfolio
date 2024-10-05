import { PrismaClient } from "@prisma/client";
import { logger } from "./logger.js";

export const prismaClient = new PrismaClient({
  log: [
    { emit: "event", level: "query" },
    { emit: "event", level: "error" },
    { emit: "event", level: "info" },
    { emit: "event", level: "warn" },
  ],
});

// Logging event untuk Prisma Client
prismaClient.$on("info", (e) => {
  logger.info(e);
});

prismaClient.$on("error", (e) => {
  logger.error(e);
});

prismaClient.$on("query", (e) => {
  logger.info(JSON.stringify(e, null, 2)); // Gunakan JSON.stringify untuk format yang lebih baik
});

prismaClient.$on("warn", (e) => {
  logger.warn(e);
});

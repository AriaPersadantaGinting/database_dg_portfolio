import express from "express";
import userController from "../controller/user-controller.js";

export const publicApi = new express.Router();

// public api
publicApi.post("/api/dg-portfolio/users", userController.register);
publicApi.post("/api/dg-portfolio/users/login", userController.login);

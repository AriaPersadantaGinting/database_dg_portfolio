import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import projectController from "../controller/project-controller.js";
import skillController from "../controller/skill-controller.js";
import { upload } from "../util/multer.js";
import contactController from "../controller/contact-controller.js";

export const apiRoutes = new express.Router();

// api public projects
apiRoutes.get("/api/dg-portfolio/projects", projectController.all);
apiRoutes.get("/api/dg-portfolio/projects/:projectId", projectController.get);

// api public skills
apiRoutes.get("/api/dg-portfolio/skills", skillController.all);
apiRoutes.get("/api/dg-portfolio/skills/:skillId", skillController.get);

// api tanpa authorization contactme
apiRoutes.post("/api/dg-portfolio/contact-me", contactController.create);
apiRoutes.get("/api/dg-portfolio/contact-me", contactController.all);
apiRoutes.delete(
  "/api/dg-portfolio/contact-me/:contactId",
  contactController.remove
);

// penggunaan authMiddleware
apiRoutes.use(authMiddleware);

// user api
apiRoutes.get("/api/dg-portfolio/users/current", userController.get);
apiRoutes.patch("/api/dg-portfolio/users/current", userController.update);
apiRoutes.delete("/api/dg-portfolio/users/current", userController.logout);

// project api
apiRoutes.post(
  "/api/dg-portfolio/projects",
  upload.single("image"),
  projectController.create
);
apiRoutes.put(
  "/api/dg-portfolio/projects/:projectId",
  upload.single("image"),
  projectController.update
);
apiRoutes.delete(
  "/api/dg-portfolio/projects/:projectId",
  projectController.remove
);

// skill api
apiRoutes.post("/api/dg-portfolio/skills", skillController.create);
apiRoutes.put("/api/dg-portfolio/skills/:skillId", skillController.update);
apiRoutes.delete("/api/dg-portfolio/skills/:skillId", skillController.remove);

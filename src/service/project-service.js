import { schemaValidate } from "../validation/validate.js";
import { ResponseError } from "../error/response-error.js";
import projectValidation from "../validation/project-validation.js";
import projectUtil from "../util/project-util.js";

const createProjectService = async (user, request) => {
  const project = await schemaValidate(
    projectValidation.createProjectValidation,
    request
  );
  project.username = user.username;
  const findProject = await projectUtil.findProjectByTitle(
    project.username,
    project.title
  );
  if (findProject) {
    throw new ResponseError(400, "project is already exists!");
  }
  return projectUtil.createProject(project);
};

const getAllProjectService = async () => {
  const getAllProject = await projectUtil.getAllProject();
  if (getAllProject === 0) {
    throw new ResponseError(404, "projects is not found!");
  }
  return getAllProject;
};

const getProjectService = async (projectId) => {
  projectId = await schemaValidate(
    projectValidation.getProjectValidation,
    projectId
  );
  const getProject = await projectUtil.getProject(projectId);
  if (getProject === 0) {
    throw new ResponseError(404, "project is not found!");
  }
  return getProject;
};

const updateProjectService = async (user, request) => {
  const project = await schemaValidate(
    projectValidation.updateProjectValidation,
    request
  );
  project.username = user.username;
  const findProject = await projectUtil.findProjectById(
    project.username,
    project.id
  );
  if (findProject === 0) {
    throw new ResponseError(404, "project is not found!");
  }
  let { title, description, url, startDate, endDate, technologies, image } =
    project;
  let updateProject = {};
  if (title) updateProject.title = title;
  if (description) updateProject.description = description;
  if (url) updateProject.url = url;
  if (image) updateProject.image = image;
  if (startDate) updateProject.startDate = startDate;
  if (endDate) updateProject.endDate = endDate;
  if (technologies) updateProject.technologies = technologies;
  return projectUtil.updateProject(project.username, project.id, updateProject);
};

const removeProjectService = async (user, projectId) => {
  projectId = await schemaValidate(
    projectValidation.removeProjectValidation,
    projectId
  );
  const findProject = await projectUtil.findProjectById(
    user.username,
    projectId
  );
  if (!findProject) {
    throw new ResponseError(400, "user is not found!");
  }
  return projectUtil.removeProject(user.username, projectId);
};

export default {
  createProjectService,
  getAllProjectService,
  getProjectService,
  updateProjectService,
  removeProjectService,
};

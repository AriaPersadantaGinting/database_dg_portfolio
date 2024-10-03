import projectService from "../service/project-service.js";

const create = async (req, res, next) => {
  try {
    const username = req.user;
    const image = req.file ? req.file.buffer : null;
    const request = req.body;
    request.image = image;
    const result = await projectService.createProjectService(username, request);
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const all = async (req, res, next) => {
  try {
    const result = await projectService.getAllProjectService();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const projectId = req.params.projectId;
    const result = await projectService.getProjectService(projectId);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const user = req.user;
    const projectId = req.params.projectId;
    console.info(projectId);
    const image = req.file ? req.file.buffer : null;
    const request = req.body;
    request.id = projectId;
    request.image = image;
    const result = await projectService.updateProjectService(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const user = req.user;
    const projectId = req.params.projectId;
    await projectService.removeProjectService(user, projectId);
    res.status(200).json({
      data: "remove project is succesfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
  all,
  get,
  update,
  remove,
};

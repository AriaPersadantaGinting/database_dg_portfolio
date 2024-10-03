import { prismaClient } from "../application/database.js";

const findProjectByTitle = async (username, title) => {
  const result = await prismaClient.project.findFirst({
    where: {
      username,
      title,
    },
  });
  return result;
};

const findProjectById = async (username, id) => {
  const result = await prismaClient.project.findFirst({
    where: {
      username,
      id,
    },
  });
  return result;
};

const createProject = async (data) => {
  const result = await prismaClient.project.create({
    data,
    select: {
      id: true,
      title: true,
      description: true,
      url: true,
      startDate: true,
      endDate: true,
      technologies: true,
      image: true,
      username: true,
    },
  });
  return result;
};

const getAllProject = async () => {
  const result = await prismaClient.project.findMany({
    select: {
      id: true,
      title: true,
      image: true,
      username: true,
    },
  });
  return result;
};

const getProject = async (id) => {
  const result = await prismaClient.project.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      url: true,
      startDate: true,
      endDate: true,
      technologies: true,
      image: true,
      username: true,
    },
  });
  return result;
};

const updateProject = async (username, id, data) => {
  const result = await prismaClient.project.update({
    where: {
      username,
      id,
    },
    data,
    select: {
      id: true,
      title: true,
      description: true,
      url: true,
      startDate: true,
      endDate: true,
      technologies: true,
      image: true,
      username: true,
    },
  });
  return result;
};

const removeProject = async (username, id) => {
  const result = await prismaClient.project.delete({
    where: {
      username,
      id,
    },
  });
  return result;
};

export default {
  findProjectByTitle,
  findProjectById,
  createProject,
  getAllProject,
  getProject,
  updateProject,
  removeProject,
};

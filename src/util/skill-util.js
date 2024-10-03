import { prismaClient } from "../application/database.js";

const findSkillBySkillName = async (username, skillname) => {
  const result = await prismaClient.skill.findFirst({
    where: {
      username,
      skillname,
    },
    select: {
      id: true,
      skillname: true,
      description: true,
      tahun: true,
      createdAt: true,
      updatedAt: true,
      username: true,
    },
  });
  return result;
};

const findAllSkills = async () => {
  const result = await prismaClient.skill.findMany({
    select: {
      id: true,
      skillname: true,
      description: true,
      tahun: true,
      createdAt: true,
      updatedAt: true,
      username: true,
    },
  });
  return result;
};

const findSkillById = async (username, id) => {
  const result = await prismaClient.skill.findFirst({
    where: {
      username,
      id,
    },
  });
  return result;
};

const getSkill = async (id) => {
  const result = await prismaClient.skill.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      skillname: true,
      description: true,
      tahun: true,
      createdAt: true,
      updatedAt: true,
      username: true,
    },
  });
  return result;
};

const createSkill = async (data) => {
  const result = await prismaClient.skill.create({
    data,
    select: {
      id: true,
      skillname: true,
      description: true,
      tahun: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const updateSkill = async (username, id, data) => {
  const result = await prismaClient.skill.update({
    where: {
      username,
      id,
    },
    data,
    select: {
      id: true,
      skillname: true,
      description: true,
      tahun: true,
      createdAt: true,
      updatedAt: true,
      username: true,
    },
  });
  return result;
};

const removeSkill = async (username, id) => {
  const result = await prismaClient.skill.delete({
    where: {
      username,
      id,
    },
  });
  return result;
};

export default {
  findSkillBySkillName,
  findSkillById,
  findAllSkills,
  createSkill,
  getSkill,
  updateSkill,
  removeSkill,
};

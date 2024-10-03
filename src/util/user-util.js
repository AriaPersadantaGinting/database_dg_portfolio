import { prismaClient } from "../application/database.js";

const findUserByUsername = async (username) => {
  const result = await prismaClient.user.findFirst({
    where: {
      username,
    },
  });
  return result;
};

const createUserRegister = async (data) => {
  const result = await prismaClient.user.create({
    data,
    select: {
      username: true,
      fullname: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const createUserLogin = async (username, token) => {
  const result = await prismaClient.user.update({
    where: {
      username,
    },
    data: {
      token,
    },
    select: {
      token: true,
    },
  });
  return result;
};

const getUser = async (username) => {
  const result = await prismaClient.user.findFirst({
    where: {
      username,
    },
    select: {
      username: true,
      fullname: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const updateUser = async (username, data) => {
  const result = await prismaClient.user.update({
    where: {
      username,
    },
    data,
    select: {
      username: true,
      fullname: true,
      updatedAt: true,
    },
  });
  return result;
};

const logoutUser = async (username, token) => {
  const result = await prismaClient.user.update({
    where: {
      username,
    },
    data: {
      token,
    },
  });
  return result;
};

export default {
  findUserByUsername,
  createUserRegister,
  createUserLogin,
  getUser,
  updateUser,
  logoutUser,
};

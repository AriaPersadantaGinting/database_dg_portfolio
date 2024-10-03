import { schemaValidate } from "../validation/validate.js";
import { ResponseError } from "../error/response-error.js";
import userValidation from "../validation/user-validation.js";
import userUtil from "../util/user-util.js";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

const createUserRegisterService = async (request) => {
  const user = await schemaValidate(
    userValidation.createRegisterUserValidation,
    request
  );
  const findUser = await userUtil.findUserByUsername(user.username);
  if (findUser) {
    throw new ResponseError(400, "user is already exists!");
  }
  user.password = await bcrypt.hash(user.password, 10);
  return userUtil.createUserRegister(user);
};

const createUserLoginService = async (request) => {
  const user = await schemaValidate(
    userValidation.createLoginUserValidation,
    request
  );
  const findUser = await userUtil.findUserByUsername(user.username);
  if (!findUser) {
    throw new ResponseError(404, "username or password is wrong!");
  }
  const isPassword = await bcrypt.compare(user.password, findUser.password);
  if (!isPassword) {
    throw new ResponseError(404, "username or password is wrong!");
  }
  let token = uuid().toString();
  return userUtil.createUserLogin(user.username, token);
};

const getUserService = async (username) => {
  username = await schemaValidate(userValidation.getUserValidation, username);
  const getUser = await userUtil.getUser(username);
  if (!getUser) {
    throw new ResponseError(404, "user is not found!");
  }
  return getUser;
};

const updateUserService = async (name, request) => {
  const user = await schemaValidate(
    userValidation.updateUserValidation,
    request
  );
  const findUser = await userUtil.findUserByUsername(user.username);
  if (findUser) {
    throw new ResponseError(400, "username is already exists!");
  }
  let updateData = {};
  let { username, password, fullname } = user;
  if (username) updateData.username = username;
  if (password) updateData.password = await bcrypt.hash(password, 10);
  if (fullname) updateData.fullname = fullname;
  return userUtil.updateUser(name, updateData);
};

const logoutUserService = async (username) => {
  username = await schemaValidate(
    userValidation.logoutUserValidation,
    username
  );
  const findUser = await userUtil.findUserByUsername(username);
  if (!findUser) {
    throw new ResponseError(404, "user is not found!");
  }
  return userUtil.logoutUser(username, null);
};

export default {
  createUserRegisterService,
  createUserLoginService,
  getUserService,
  updateUserService,
  logoutUserService,
};

import Joi from "joi";

const createRegisterUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  firstname: Joi.string().max(100).required(),
});

const createLoginUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
});

const getUserValidation = Joi.string().max(100).required();

const updateUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  firstname: Joi.string().max(100).required(),
});

const logoutUserValidation = Joi.string().max(100).required();

export default {
  createRegisterUserValidation,
  createLoginUserValidation,
  getUserValidation,
  updateUserValidation,
  logoutUserValidation,
};

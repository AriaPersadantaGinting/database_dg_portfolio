import Joi from "joi";

const createSkillValidation = Joi.object({
  skillname: Joi.string().max(100).required(),
  tahun: Joi.string().max(20).required(),
  description: Joi.string().max(1000).allow(null, ""),
  username: Joi.string().max(100).required(),
  createdAt: Joi.date().iso(),
  updatedAt: Joi.date().iso(),
});

const getSkillValidation = Joi.number().positive().required();

const updateSkillValidation = Joi.object({
  id: Joi.number().positive().required(),
  skillname: Joi.string().max(100).optional(),
  tahun: Joi.string().max(20).optional(),
  description: Joi.string().max(1000).allow(null, "").optional(),
  username: Joi.string().max(100).required(),
  updatedAt: Joi.date().iso(),
});

const removeSkillValidation = Joi.number().positive().required();

export default {
  createSkillValidation,
  getSkillValidation,
  updateSkillValidation,
  removeSkillValidation,
};

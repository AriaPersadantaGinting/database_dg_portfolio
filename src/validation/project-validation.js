import Joi from "joi";

const createProjectValidation = Joi.object({
  title: Joi.string().max(250).required(),
  description: Joi.string().max(550).required(),
  url: Joi.string().uri().max(250).optional().allow(null),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().optional().allow(null),
  technologies: Joi.string().max(250).required(),
  image: Joi.binary().optional().allow(null),
});

const getProjectValidation = Joi.number().positive().required();

const updateProjectValidation = Joi.object({
  id: Joi.number().positive().required(),
  title: Joi.string().max(250).optional(),
  description: Joi.string().max(550).optional(),
  url: Joi.string().uri().max(250).optional().allow(null),
  startDate: Joi.date().iso().optional(),
  endDate: Joi.date().iso().optional().allow(null),
  technologies: Joi.string().max(250).optional(),
  image: Joi.binary().optional().allow(null),
});

const removeProjectValidation = Joi.number().positive().required();

export default {
  createProjectValidation,
  getProjectValidation,
  updateProjectValidation,
  removeProjectValidation,
};

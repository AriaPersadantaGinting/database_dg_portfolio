import { schemaValidate } from "../validation/validate.js";
import { ResponseError } from "../error/response-error.js";
import skillValidation from "../validation/skill-validation.js";
import skillUtil from "../util/skill-util.js";

const createSkillService = async (user, request) => {
  const skill = await schemaValidate(
    skillValidation.createSkillValidation,
    request
  );
  skill.username = user.username;
  const findSkill = await skillUtil.findSkillBySkillName(
    skill.username,
    skill.skillname
  );
  if (findSkill) {
    throw new ResponseError(400, "skill is already exists!");
  }
  return skillUtil.createSkill(skill);
};

const getAllSkillService = async () => {
  const findAllSkills = await skillUtil.findAllSkills();
  if (findAllSkills.length === 0) {
    throw new ResponseError(400, "skills is not found!");
  }
  return findAllSkills;
};

const getSkillService = async (skillId) => {
  skillId = await schemaValidate(skillValidation.getSkillValidation, skillId);
  const getSkill = await skillUtil.getSkill(skillId);
  if (getSkill.length === 0) {
    throw new ResponseError(400, "skill is not found!");
  }
  return getSkill;
};

const updateSkillService = async (user, request) => {
  const skill = await schemaValidate(
    skillValidation.updateSkillValidation,
    request
  );
  skill.username = user.username;
  const findSkill = await skillUtil.findSkillById(skill.username, skill.id);
  if (!findSkill) {
    throw new ResponseError(400, "skill is not found!");
  }
  const { skillname, description, tahun } = skill;
  let updateSkill = {};
  if (skillname) updateSkill.skillname = skillname;
  if (description) updateSkill.description = description;
  if (tahun) updateSkill.tahun = tahun;
  return skillUtil.updateSkill(skill.username, skill.id, updateSkill);
};

const removeSkillService = async (user, skillId) => {
  skillId = await schemaValidate(
    skillValidation.removeSkillValidation,
    skillId
  );
  const findSkill = await skillUtil.findSkillById(user.username, skillId);
  if (!findSkill) {
    throw new ResponseError(400, "skill is not found!");
  }
  return skillUtil.removeSkill(user.username, skillId);
};

export default {
  createSkillService,
  getAllSkillService,
  getSkillService,
  updateSkillService,
  removeSkillService,
};

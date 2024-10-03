import { ResponseError } from "../error/response-error.js";

export const schemaValidate = async (schema, request) => {
  const result = await schema.validate(request);
  if (result.errors) {
    throw new ResponseError(400, result.errors.message);
  } else {
    return result.value;
  }
};

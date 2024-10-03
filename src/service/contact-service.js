import { schemaValidate } from "../validation/validate.js";
import { ResponseError } from "../error/response-error.js";
import contactValidation from "../validation/contact-validation.js";
import contactUtil from "../util/contact-util.js";

const createContactService = async (request) => {
  const contact = await schemaValidate(
    contactValidation.createContactMeValidation,
    request
  );
  const findContact = await contactUtil.findContactMe(
    contact.name,
    contact.email,
    contact.subject
  );
  if (findContact) {
    throw new ResponseError(400, "message already send!");
  }
  return contactUtil.createContactMe(contact);
};

const getAllContactMeService = async () => {
  const findAllContacts = await contactUtil.findAllContacts();
  if (findAllContacts.length === 0) {
    throw new ResponseError(400, "contacts is not found!");
  }
  return findAllContacts;
};

const removeContactMeService = async (contactMeId) => {
  contactMeId = await schemaValidate(
    contactValidation.getContactMeValidation,
    contactMeId
  );
  const findContact = await contactUtil.findContactMeById(contactMeId);
  if (!findContact) {
    throw new ResponseError(400, "contact is not found!");
  }
  return contactUtil.removeContact(contactMeId);
};

export default {
  createContactService,
  getAllContactMeService,
  removeContactMeService,
};

import contactService from "../service/contact-service.js";

const create = async (req, res, next) => {
  try {
    const result = await contactService.createContactService(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const all = async (req, res, next) => {
  try {
    const result = await contactService.getAllContactMeService();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;
    await contactService.removeContactMeService(contactId);
    res.status(200).json({
      data: "remove contact is succesfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
  all,
  remove,
};

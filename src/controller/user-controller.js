import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.createUserRegisterService(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.createUserLoginService(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const result = await userService.getUserService(req.user.username);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await userService.updateUserService(
      req.user.username,
      req.body
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    await userService.logoutUserService(req.user.username);
    res.status(200).json({
      data: "logout successfully..",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
  get,
  update,
  logout,
};

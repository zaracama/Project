const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require(`../models/index`);

class UserController {
  static async addUser(req, res, next) {
    try {
      const { email, password, phoneNumber, address, username } = req.body;
      const generate = await User.create({
        email,
        password,
        phoneNumber,
        address,
        username,
      });

      const dataA = await User.findOne({
        where: { email },
        attributes: ["id", "username"],
      });
      res.status(201).json(dataA);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: `EmailIsRequired` };
      }
      if (!password) {
        throw { name: `PasswordIsRequired` };
      }

      const user1 = await User.findOne({
        where: { email },
      });

      if (!user1) {
        throw { name: `EmailIsInvalid` };
      }

      const validPass = comparePassword(password, user1.password);

      if (!validPass) {
        throw { name: `PasswordIsInvalid` };
      }

      const access_token = signToken(user1);

      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  static async template(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
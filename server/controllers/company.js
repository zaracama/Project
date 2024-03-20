const { Company } = require(`../models/index`);

class CompanyController {
  static async added(req, res, next) {
    try {
      const { name } = req.body;
      const data = await Company.create({ name });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async listed(req, res, next) {
    try {
      const data = await Company.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async edited(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const data = await Company.findByPk(id);
      if (!data) {
        throw { name: `Error Not Found` };
      }

      await Company.updated(
        { name },
        {
          where: { id },
        }
      );
      const dataCompany = await Company.findByPk(id);
      res.status(200).json(dataCompany);
    } catch (error) {
      next(error);
    }
  }

  static async del(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Company.findByPk(id);

      if (!data) {
        throw { name: `Error Not Found` };
      }

      await Company.destroy({
        where: { id },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async template(req, res, next) {
    try {
      res.status(200).json({ message: `Masuk` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CompanyController;
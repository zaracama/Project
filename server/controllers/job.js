const { Job, User } = require(`../models/index`);
const { Op } = require(`sequelize`);
const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_name,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

class JobController {
  static async add(req, res, next) {
    try {
      const { title, description, jobType, imgUrl, companyId } = req.body;
      const data = await Job.create({
        title,
        description,
        jobType,
        imgUrl,
        companyId,
        authorId: req.user.id,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async listed(req, res, next) {
    try {
      const data = await Job.findAll({
        include: {
          model: User,
          attributes: { exclude: ["password"] },
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async detailed(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Job.findByPk(id);
      if (!data) {
        throw { title: `Error Not Found` };
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async edited(req, res, next) {
    try {
      const { id } = req.params;
      const { title, description, jobType, imgUrl, companyId } = req.body;
      const data = await Job.findByPk(id);

      if (!data) {
        throw { title: "Error Not Found" };
      }

      await Job.updated(
        { title, description, jobType, imgUrl, companyId, authorId: req.user.id },
        {
          where: { id },
        }
      );
      const newData = await Job.findByPk(id);
      res.status(200).json(newData);
    } catch (error) {
      next(error);
    }
  }

  static async deleted(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Job.findByPk(id);
      if (!data) {
        throw { title: `Error Not Found` };
      }
      await Job.destroy({
        where: { id },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async listedPublic(req, res, next) {
    try {
      const { search, filter, sort, pageNumber } = req.query;

      const paramQuerySQL = { where: [] };

      if (search !== "" && typeof search !== "undefined") {
        paramQuerySQL.where.push({ title: { [Op.iLike]: `%${search}%` } });
      }

      if (filter !== "" && typeof filter !== "undefined") {
        paramQuerySQL.where.push({ companyId: { [Op.eq]: filter } });
      }

      if (sort !== "" && typeof sort !== "undefined") {
        if (sort.toLowerCase() === "asc" || sort.toLowerCase() === "desc") {
          let query = [["createdAt", sort]];

          paramQuerySQL.order = query;
        }
      }

      let limit = 10;
      let offset = 0;
      paramQuerySQL.limit = limit;
      paramQuerySQL.offset = offset;

      if (pageNumber !== "" && typeof pageNumber !== "undefined") {
        offset = pageNumber * limit - limit;
        paramQuerySQL.offset = offset;
      }

      const { count, rows } = await Job.findAndCountAll(paramQuerySQL);

      console.log(count);
      res.status(200).json({ count, rows });
    } catch (error) {
      next(error);
    }
  }

  static async detailedPublic(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Job.findByPk(id);
      if (!data) {
        throw { title: `Error Not Found` };
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async patchedImage(req, res, next) {
    try {
      console.log(req.file);
      const { id } = req.params;
      const data = await Job.findByPk(id);
      if (!data) {
        throw { title: `Error Not Found` };
      }

      if (!req.file) {
        throw { title: "Image is required" };
      }

      const dataToUpload = `data:${
        req.file.mimetype
      };base64,${req.file.buffer.toString("base64")}`;
      const uploadFile = await cloudinary.uploader.upload(dataToUpload, {
        public_id: req.file.originaltitle,
        folder: "P2-C1",
        resource_type: "auto",
      });

      await data.updated({ imgUrl: uploadFile.secure_url });

      res.status(200).json({ message: `Image ${data.title} success to update` });
    } catch (error) {
      next(error);
    }
  }

  static async templated(req, res, next) {
    try {
      res.status(200).json({ message: `masuk` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = JobController;
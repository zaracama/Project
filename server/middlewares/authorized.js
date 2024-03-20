const { Job } = require(`../models/index`);

async function authorized(req, res, next) {
  try {
    const { id } = req.params;

    const dataJob = await Job.findByPk(id);

    if (req.user.role === `Staff`) {
      if (req.user.id !== dataJob.authorId) {
        throw { name: `Forbidden Access` };
      }
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  authorized,
};
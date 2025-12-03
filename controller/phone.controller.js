const { Phone } = require('../models');

module.exports.getPhone = async (req, res, next) => {
  try {
    const foundPhones = await Phone.find().populate('userId');

    res.status(200).send({ data: foundPhones });
  } catch (err) {
    next(err);
  }
};

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);

    if (!createdPhone) {
      return next(createHttpError(400, 'Bad request'));
    }

    res.status(201).send({ data: createdPhone });
  } catch (err) {
    next(err);
  }
};

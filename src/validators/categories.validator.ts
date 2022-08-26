import Joi = require("joi");

const categoriesSchema = Joi.object({
  category_name: Joi.string().alphanum().required(),
  type: Joi.string().alphanum().required(),
});

const categoriesValidator = async (req, res, next) => {
  const { error, value } = categoriesSchema.validate(req.body);
  if (error) {
    res.send(error);
  } else {
    next();
  }
};

export default categoriesValidator;

import Joi = require("joi");

const accountTypeSchema = Joi.object({
  account_type_name: Joi.string().alphanum().required(),
});

const accountTypeValidator = async (req, res, next) => {
  const { error, value } = accountTypeSchema.validate(req.body);
  if (error) {
    res.send(error);
  } else {
    next();
  }
};

export default accountTypeValidator;

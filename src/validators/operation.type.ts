import Joi = require("joi");

const operationTypeSchema = Joi.object({
  operation_type_name: Joi.string().alphanum().required(),
  operation_type_id: Joi.number().required(),
});

const operationTypeValidator = async (req, res, next) => {
  const { error, value } = operationTypeSchema.validate(req.body);
  if (error) {
    res.send(error);
  } else {
    next();
  }
};

export default operationTypeValidator;

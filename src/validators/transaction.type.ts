import Joi = require("joi");

const transactionTypeSchema = Joi.object({
  transaction_type_name: Joi.string().alphanum().required(),
  transaction_type_id: Joi.number().required(),
  transaction_type_details: Joi.string().alphanum().required(),
  transaction_type_purged: Joi.boolean(),
});
const transactionTypeValidaotr = async (req, res, next) => {
  const { error, value } = transactionTypeSchema.validate(req.body);
  if (error) {
    res.send(error);
  } else {
    next();
  }
};

export default transactionTypeValidaotr;

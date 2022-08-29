import Joi = require("joi");

const categoriesSchema = Joi.object({
  account_id: Joi.string().alphanum().required(),
  chart_account_name: Joi.string().alphanum().required(),
  chart_account_type: Joi.string().alphanum().required(),
  parent_chart_account: Joi.string().alphanum().required(),
  currency_id: Joi.string().alphanum().required(),
  balance: Joi.number().required(),
});

const chartAccountValidator = async (req, res, next) => {
  const { error, value } = categoriesSchema.validate(req.body);
  if (error) {
    res.send(error);
  } else {
    next();
  }
};

export default chartAccountValidator;

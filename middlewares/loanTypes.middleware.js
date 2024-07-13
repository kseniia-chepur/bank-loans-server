const { loanTypeValidation, HttpError } = require("../utils");
const { loanTypeService } = require('../services');

exports.handleCreateLoanType = async (req, res, next) => {
  try {
    const { value, error } = loanTypeValidation.createLoanTypeValidator(req.body);

    if (error) {
      throw new HttpError(400, 'Invalid loan type data');
    }

    req.body = value;
    next();
  } catch(err) {
    next(err);
  }
};

exports.validateLoanTypeId = async (req, res, next) => {
  try {
    const { id } = req.params;

    await loanTypeService.checkLoanTypeExistsById(id);

    next();
  } catch(err) {
    next(err);
  }
};

exports.handleUpdateLoanType = async (req, res, next) => {
  try {
    const { value, error } = loanTypeValidation.updateLoanTypeValidator(req.body);

    if (error) {
      throw new HttpError(400, 'Invalid loan type data');
    }

    req.body = value;
    next();
  } catch(err) {
    next(err);
  }
};
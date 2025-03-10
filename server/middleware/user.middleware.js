import {
  newUserSchema,
  loginSchema,
  CompletStudentSchema
} from '../services/userValidation.service.js';

export function newUserValidation(req, res, next) {
  try {
    let { error } = newUserSchema.validate(req.body);
    if (error) {
      let errMsg = error.details[0].message;
      return res.status(403).send({
        message: errMsg,
      });
    }
    next();
  } catch (error) {
    console.error('Validate new user Error: ', error);
    return res.status(500).send({
      message: error.message,
    });
  }
}
export function loginValidation(req, res, next) {
  try {
    let { error } = loginSchema.validate(req.body);
    if (error) {
      let errMsg = error.details[0].message;
      return res.status(403).send({
        message: errMsg,
      });
    }
    next();
  } catch (error) {
    console.error('Validate login Error: ', error);
    return res.status(500).send({
      message: error.message,
    });
  }
}


export const CompletStudentValidation = (req, res, next) => {
  try {
    const { error } = CompletStudentSchema.validate(req.body, { abortEarly: false }); 
    if (error) {
      let errMsg = error.details[0].message;
      return res.status(403).send({
        message: errMsg,
      });
    }
    next();
  } catch (error) {
    console.error('Validate new user Error: ', error);
    res.status(500).send({ message: 'Internal server error' });
  }
};
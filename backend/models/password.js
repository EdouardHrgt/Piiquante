const PasswordValidator = require('password-validator');

const pwdSchema = new PasswordValidator();

pwdSchema
  .is()
  .min(8)
  .is()
  .max(25)
  .has()
  .uppercase(1)
  .has()
  .lowercase(1)
  .has()
  .digits(1)
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf(['Passw0rd', 'Password123']);

module.exports = pwdSchema;

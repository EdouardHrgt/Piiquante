const pwdSchema = require('../models/password');

module.exports = (req, res, next) => {
  if (pwdSchema.validate(req.body.password)) {
    next();
  } else {
    res.status(400).json({
      message:
        'Votre mot de passe doit faire entre 8 et 25 caractères et contenir au moins une minuscule,majuscule et un chiffre',
    });
  }
};

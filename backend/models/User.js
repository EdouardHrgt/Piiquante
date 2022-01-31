const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userModel = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

//Application du plugin 'unique-validator' au modèle USER pour aider à gérer les erreurs lors de l'utilisation d'un Email identique
userModel.plugin(uniqueValidator);

module.exports = mongoose.model('User', userModel);

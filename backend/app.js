const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

// Variables d'environnement
require('dotenv').config();

//Connexion à MongoDB
mongoose
  .connect(process.env.DB_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(() => console.log('MongoDB Disconnected'));

//Création de l'appli Express
const app = express();

// Sécurisation des headers Express
app.use(helmet());

// Gestion des CORS.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// Parsing body en JSON
app.use(express.json());

// Routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

//Exportation de l'appli
module.exports = app;

// routes/login.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importer le modèle User

// Route POST pour la connexion
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Vérification des champs requis
  if (!email || !password) {
    return res.status(400).json({ error: 'Email et mot de passe sont requis.' });
  }

  try {
    // Rechercher l'utilisateur dans la base de données
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé.' });
    }

    // Comparer le mot de passe (si hashé, utiliser bcrypt pour vérifier le hash)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Mot de passe incorrect.' });
    }

    // Si l'utilisateur est trouvé et le mot de passe est correct
    res.status(200).json({ message: 'Connexion réussie', user });
  } catch (error) {
    console.error('Erreur lors de la tentative de connexion :', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
});

module.exports = router;

// routes/login.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importer le modèle User

// Route POST pour la connexion
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Vérification des champs requis
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    // Rechercher l'utilisateur dans la base de données
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    // Comparer le mot de passe (si hashé, utiliser bcrypt pour vérifier le hash)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Incorrect password.' });
    }

    // Si l'utilisateur est trouvé et le mot de passe est correct
    res.status(200).json({ message: 'Login successful.', user });
  } catch (error) {
    console.error('Error during login attempt:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;

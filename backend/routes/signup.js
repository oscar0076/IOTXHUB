const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importer le modèle User

// Exemple de route POST pour l'inscription
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    // Validation de base
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'This email is already in use.' });
        }

        // Créer un nouvel utilisateur
        const newUser = new User({ name, email, password });

        // Enregistrer l'utilisateur dans la base de données
        await newUser.save();

        // Réponse de succès
        res.status(201).json({ message: 'User successfully registered.', data: { name, email } });
    } catch (err) {
        console.error('Erreur lors de l\'inscription :', err);
        res.status(500).json({ error: 'An error occurred during registration.' });
    }
});

module.exports = router;

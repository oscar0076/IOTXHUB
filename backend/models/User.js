const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Vous pouvez ajouter une contrainte d'unicité sur l'email
    },
    password: {
        type: String,
        required: true
    }
});

// Crée le modèle User à partir du schéma
const User = mongoose.model('User', userSchema);

module.exports = User;
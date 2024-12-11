const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Base de données connectée');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error.message);
        process.exit(1); // Quitte le processus en cas d'échec
    }
};

module.exports = connectDB;

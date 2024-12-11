const express = require('express');
const path = require('path');
const bodyParser= require('body-parser')
const cors = require('cors');
const app = express();
const signupRoute = require('./routes/signup');
const loginRoutes = require('./routes/login');

// Middleware pour les routes
app.use(express.json()); // Parser JSON
app.use(bodyParser.json()); 

app.use(cors({
    origin: 'http://localhost:3000', // C'est le port de ton frontend React
}));


app.use('/api', signupRoute); // Ajouter la route d'inscription
app.use('/api', loginRoutes);

const connectDB = require('./config/config');
// Connecter à MongoDB
connectDB();



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Une erreur interne est survenue.' });
});


function checkAuth(req, res, next) {
    if (req.headers.authorization) {
        next(); // Si un token est présent, continuez
    } else {
        res.status(401).json({ message: 'Accès non autorisé. Authentification requise.' });
    }
}




// Route pour servir un fichier sécurisé
app.get('/cours/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'cours', req.params.filename);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Fichier non trouvé');
        }
    });
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});


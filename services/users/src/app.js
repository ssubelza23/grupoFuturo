const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servicio de usuarios escuchando en el puerto ${PORT}`);
});

module.exports = app;
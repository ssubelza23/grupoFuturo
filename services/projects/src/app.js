const express = require('express');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
    console.log(`Servicio de proyectos escuchando en el puerto ${PORT}`);
});
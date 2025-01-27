const express = require('express');
const cors = require('cors');
const path = require('path');
const charactersRoutes = require('./routes/characters');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', charactersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/characters', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    res.json(response.data.results); 
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los personajes' });
  }
});

router.get('/characters/:name', async (req, res) => {
  const name = req.params.name;
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
    if (response.data.results.length > 0) {
      res.json(response.data.results[0]); 
    } else {
      res.status(404).json({ error: 'Personaje no encontrado' });
    }
  } catch (error) {
    res.status(404).json({ error: 'Personaje no encontrado' });
  }
});

module.exports = router;

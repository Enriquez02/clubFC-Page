require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

// ----------------------------------------------------
// 1. CONFIGURACIÓN DE APIS
// ----------------------------------------------------
const API_KEY = process.env.X_AUTH_TOKEN; 

const authHeaders = {
  "X-Auth-Token": API_KEY
};

const SQUAD_URL = 'https://api.football-data.org/v4/teams/81';
const MATCHES_URL = 'https://api.football-data.org/v4/teams/81/matches?status=SCHEDULED';

// ----------------------------------------------------
// 2. RUTAS
// ----------------------------------------------------

app.get('/', (req, res) => {
  return res.send({ message: 'Servidor central del Barça funcionando, Enrique!' });
});

// RUTA PARA EL EQUIPO (SQUAD)
app.get('/squad', async (req, res) => {
  try {
    const response = await axios.get(SQUAD_URL, { headers: authHeaders });
    return res.json(response.data);
  } catch (error) {
    console.error("Error en /squad:", error.message);
    return res.status(500).json({ message: 'Error en squad', details: error.message });
  }
});

// RUTA PARA LOS PARTIDOS (MATCHES)
app.get('/matches', async (req, res) => {
  try {
    const response = await axios.get(MATCHES_URL, { headers: authHeaders });
    return res.json(response.data);
  } catch (error) {
    console.error("Error en /matches:", error.message);
    return res.status(500).json({ message: 'Error en matches', details: error.message });
  }
});

// ----------------------------------------------------
// 3. INICIO DEL SERVIDOR
// ----------------------------------------------------
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor único escuchando en http://localhost:${PORT}`);
  console.log(`✅ Ruta squad: http://localhost:${PORT}/squad`);
  console.log(`✅ Ruta matches: http://localhost:${PORT}/matches`);
});
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ----------------------------------------------------
// 1. CONSTANTES Y CONFIGURACIÓN
// ----------------------------------------------------

const API_KEY = process.env.X_AUTH_TOKEN;  // tu X-Auth-Token
const BASE_URL = 'https://api.football-data.org/v4/teams/81';

const authHeaders = {
  "X-Auth-Token": API_KEY
};

// ----------------------------------------------------
// 2. RUTAS
// ----------------------------------------------------

app.get('/', (req, res) => {
  return res.send({ message: 'API de fútbol funcionando correctamente, Enrique!' });
});


// 🔥 ESTA ES LA RUTA QUE IMPORTA
app.get('/squad', async (req, res) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: authHeaders,
    });

    // extraemos solo la parte de jugadores
return res.json(response.data);
  } catch (error) {
    console.error("Error al obtener datos de la API:", error.message);

    return res.status(500).json({
      message: 'Error al conectar con la API externa.',
      details: error.message
    });
  }
});

// ----------------------------------------------------
// 3. INICIO DEL SERVIDOR
// ----------------------------------------------------

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor Express escuchando en http://localhost:${PORT}`);
});

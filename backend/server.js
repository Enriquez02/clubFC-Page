const express = require('express');
const cors = require('cors');
const axios = require('axios'); 

const app = express();

// MIDDLEWARE (Reglas de Tráfico)
app.use(cors()); 
app.use(express.json()); 

// ----------------------------------------------------
// 1. CONSTANTES Y CONFIGURACIÓN DE LA API EXTERNA
// ----------------------------------------------------

//  Cargamos las variables del .env en memoria
const API_KEY = process.env.APISPORTS_KEY; 
const API_HOST = process.env.RAPIDAPI_HOST;

//  Definimos la URL (¡Perfecto!)
const BASE_URL = 'https://v3.football.api-sports.io/players/squads?team=529'

//  Definimos las credenciales para Axios/fetch
const authHeaders = { 
'x-apisports-key': API_KEY,
'x-rapidapi-host': API_HOST,
}

// ----------------------------------------------------
// 2. RUTAS DE LA API (Endpoints)
// ----------------------------------------------------

// RUTA 1: Health Check (Ruta Raíz)
app.get('/', (req, res) => {
    return res.send({ message: 'API de Fútbol funcionando correctamente, Enrique!' });
});


// RUTA 2: Petición a la API Externa 
app.get('/squad', async (req, res) => {

    try { 
        
        //  Hacemos la petición a la API externa
         const response = await axios.get(BASE_URL, {
        headers: authHeaders,
    });
        // Devolvemos la respuesta de la API externa a nuestro Frontend

            return res.json(response.data);

    } catch (error) { // ⬅️ CAPTURAMOS el error si algo sale mal

        //  Manejo de errores (lo vemos en nuestra consola)
        console.error("Error al obtener datos de la API de Fútbol:", error.message);

        // Devolvemos un error 500 al cliente de forma segura
        return res.status(500).json({
            message: 'Error al conectar con la API externa.',
            details: error.message
        });



    } 
    
}); 


// ----------------------------------------------------
// 3. INICIO DEL SERVIDOR
// ----------------------------------------------------

// Define el puerto (usa la variable de entorno PORT o 7000 por defecto)
const PORT = process.env.PORT || 7000; 

app.listen(PORT, () => {
    // Confirma que el servidor está escuchando
    console.log(`🚀 Servidor Express escuchando en http://localhost:${PORT}`);
});
   
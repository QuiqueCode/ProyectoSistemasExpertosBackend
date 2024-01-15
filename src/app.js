import express from 'express';
import cors from 'cors'; 

const app = express();

// Configurar el middleware CORS
app.use(cors());

// Middleware que permite responder y recibir objetos JSON
app.use(express.json());

// Manejar 404 - Endpoint no encontrado
app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint Not Found"
    });
});


app.listen(3000);

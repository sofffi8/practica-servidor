import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js'; 

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Le decimos a Express que use el indexador global bajo el prefijo /api
app.use('/api', routes);

// Ruta base
app.get('/', (req, res) => {
    res.json({ mensaje: "Bienvenido" });
});

export default app;
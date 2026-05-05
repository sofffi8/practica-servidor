import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usuariosRoutes from './routes/usuarios.routes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', usuariosRoutes);

//Rutas
app.get('/', (req, res) => {
    res.json({mensaje: "Bienvenido"});
});

export default app;
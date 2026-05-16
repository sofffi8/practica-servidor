import { Router } from 'express';
import productRoutes from './product.routes.js';  // Importamos el CRUD nuevo
import usuariosRoutes from './usuarios.routes.js'; // Importamos tus ejercicios viejos

const router = Router(); 

// Redireccionamos el tráfico según lo que pidan:
router.use('/products', productRoutes); // Todo lo que sea /api/products va al CRUD
router.use('/', usuariosRoutes);       // Tus ejercicios siguen funcionando en /api/ejercicio1, etc.
    
export default router;
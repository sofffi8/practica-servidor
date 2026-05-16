import { Router } from 'express';
import Product from '../models/product.js'; // Conectamos con el modelo Product

const router = Router();

// 1. LEER TODOS LOS PRODUCTOS (GET /api/products)
router.get('/', async (req, res) => {
    try {
        const productos = await Product.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error: error.message });
    }
});

// 2. LEER UN SOLO PRODUCTO POR ID (GET /api/products/:id)
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener producto', error: error.message });
    }
});

// 3. CREAR UN PRODUCTO NUEVO (POST /api/products)
router.post('/', async (req, res) => {
    try {
        const nuevoProducto = await Product.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: 'Error de validación', errors: error.errors.map(e => e.message) });
        }
        res.status(500).json({ message: 'Error al crear producto', error: error.message });
    }
});

// 4. ACTUALIZAR UN PRODUCTO (PUT /api/products/:id)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Product.findByPk(id);
        if (producto) {
            const productoActualizado = await producto.update(req.body);
            res.status(200).json(productoActualizado);
        } else {
            res.status(404).json({ message: 'Producto no encontrado para actualizar' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar producto', error: error.message });
    }
});

// 5. BORRAR UN PRODUCTO (DELETE /api/products/:id)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await Product.destroy({ where: { id } });
        if (resultado > 0) {
            res.status(200).json({ message: 'Producto eliminado exitosamente' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado para eliminar' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto', error: error.message });
    }
});

export default router;
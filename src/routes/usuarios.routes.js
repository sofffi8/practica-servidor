import { Router } from "express";
import usuarios from "../usuarios.js";

const router = Router();

router.get('/ejercicio1', (req, res) => {
    const activos = usuarios.filter(u => u.activo);
    res.json(activos);
});

router.get('/ejercicio2', (req, res) => {
    const nombresCiudades = usuarios.map(u => `${u.nombre} - ${u.domicilio.ciudad}`);
    res.json(nombresCiudades);
});

router.get('/ejercicio3', (req, res) => {
    const agrupados = usuarios.reduce((acc, u) => {
        const ciudad = u.domicilio.ciudad;
        if (!acc[ciudad]) acc[ciudad] = []; 
        acc[ciudad].push(u.nombre);
        return acc;
    }, {});
    res.json(agrupados);
});

router.get('/ejercicio4', (req, res) => {
    const activos = usuarios.filter(u=>u.activo);
    const sumaEdades = activos.reduce((sum, u) => sum + u.edad, 0);
    const promedio = activos.length > 0 ? sumaEdades / activos.length : 0;
    res.json({promedio_edad: promedio});
});

export default router;
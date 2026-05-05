import app from './src/app.js';
import { sequelize, testConnection } from './src/config/database.js';
import Product from './src/models/product.js'; 

const startServer = async () => {
  try {
    // Paso 1: Verificar la conexión
    await testConnection();

    // Paso 2: Crear tablas (si es que no existen)
    await sequelize.sync({ force: false });
    console.log('Tablas sincronizadas');

    // Paso 3: Abrir el puerto
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

startServer();
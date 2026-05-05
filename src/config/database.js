import { Sequelize } from 'sequelize';
import 'dotenv/config';

// Creamos la conexión usando las variables del archivo .env
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: { underscored: true } // Esto convierte campos como createdAt a created_at
  }
);

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error.message);
    process.exit(1); 
  }
};
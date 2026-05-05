import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Product = sequelize.define('Product', {
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  price: { 
    type: DataTypes.DECIMAL(10, 2),
    validate: { min: 0 } 
  }
});

export default Product;
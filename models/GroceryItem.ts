import { DataTypes } from "sequelize";
import { sequelize } from "./db";

const GroceryItem = sequelize.define("GroceryItem", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export { GroceryItem };

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("grocerystore", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };

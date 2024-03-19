const Sequelize = require("sequelize");
const sequelize = new Sequelize(
                  "sequelize_practice",
                  "root",
                  "",
                  {
                                    host: "localhost",
                                    dialect: "mysql"
                  }
);

sequelize.authenticate().then(() => {
                  console.log("Connection has been establised succesfully")
})
.catch((error) => {
     console.error("error in connection:",error)             
})
module.exports = sequelize;
const { Sequelize, DataTypes} = require("sequelize");
const sequelize = require("./server");

const Book = sequelize.define("books",{
    title:{
                  type:DataTypes.STRING,
                  allowNull:false
    },
    auther:{
             type:DataTypes.STRING,
             allowNull:false
    },
    release_date:{
                  type:DataTypes.DATEONLY,
    },
    subject:{
                  type:DataTypes.INTEGER,
    }
})

sequelize.sync().then(() => {
    console.log("books table created")
}).catch((error) => {
      console.error("error in created books table:",error)            
})

module.exports = Book;
const Sequelize = require("sequelize");
const Book = require("./book.model");
const sequelize = require("./server");

sequelize.sync().then(() => {

                  Book.findOne({
                      where: {
                          id : "4"
                      }
                  }).then(res => {
                      console.log(res)
                  }).catch((error) => {
                      console.error('Failed to retrieve data : ', error);
                  });
              
              }).catch((error) => {
                  console.error('Unable to create table : ', error);
              });

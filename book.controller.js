const Sequelize = require("sequelize");
const Book = require("./book.model");
const sequelize = require("./server");


Book.create({
    title: "Clean Code",
    author: "Robert Cecil Martin",
    release_date: "2021-12-14",
    subject: 3
}).then(res => {
    console.log(res)
}).catch((error) => {
    console.error('Failed to create a new record : ', error);
});
Book.create({
    title: "javascript",
    author: "netcafegit",
    release_date: "2021-12-14",
    subject: 3
}).then(res => {
    console.log(res)
}).catch((error) => {
    console.error('Failed to create a new record : ', error);
});
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

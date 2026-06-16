console.log("db.js loaded");

const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql1189",
    database: "hostel_db"
});

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

module.exports = connection;
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) {
        console.log('Error: ', err.stack);
        return;
    }
    console.log('connected as id ', connection.threadId);
})

module.exports = connection;
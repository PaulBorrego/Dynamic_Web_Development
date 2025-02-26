const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Security',
    database: 'recipe_list'
});


connection.connect((err => {
    if(err) throw err;
    console.log(`MySQL connection successful!`);
}));

module.exports = connection;

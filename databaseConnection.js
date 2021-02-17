const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

//mysql://b174a41e9846d2:3922fd99@us-cdbr-east-03.cleardb.com/heroku_95732b56673a61a?reconnect=true 
//mysql://b6fb24cb4c8c37:702be0f5@us-cdbr-east-03.cleardb.com/heroku_a79dfbc72e06757?reconnect=true
const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b174a41e9846d2",
	password: "3922fd99",
	database: "heroku_95732b56673a61a",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "database1",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		
var mysql = require('mysql');
//Factory Method
function createConnection() {
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'admin123',
    database : 'casadocodigo_nodejs'
  });
}

//wrapper
module.exports = function() {
  return createConnection;
}

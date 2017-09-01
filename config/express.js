var app = require('express')();
app.set('view engine','ejs');

module.exports = function() {
  console.log("modudo sendo carregado");
  return app;
}

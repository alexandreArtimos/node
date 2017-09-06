var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {

  var app = express();

  app.set('view engine','ejs');
  app.set('views','./app/views');

  //responsavel por fazer o parse dos dados do formulario para json ao submiter o form
  //funciona como um midware, antes de executar a linha abaixo com o metodo loader
  app.use(bodyParser.urlencoded({extended: true}));
  //adicionando um novo midware para fazer o parse das requisicoes feitas em json
  app.use(bodyParser.json());
  load('routes', {cwd: 'app'})
  .then('infra')
  .into(app);
  console.log("modudo sendo carregado...");

  return app;
}

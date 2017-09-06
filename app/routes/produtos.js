module.exports = function (app) {
    var listaProdutos = function(req,res) {
      var connection = app.infra.connectionFactory();
      var produtosDAO = new app.infra.ProdutosDAO(connection);
      produtosDAO.lista(function(err, results) {
        res.format({
          html: function () {
            res.render('produtos/lista',{lista:results});
          },
          json: function () {
            res.json(results);
          }
        });

      });
      connection.end();
  };

  app.get('/produtos', listaProdutos);

  app.get('/produtos/form', function(req,res) {
    res.render('produtos/form');

  });

  app.post('/produtos', function(req,res) {
    var produto = req.body;
    console.log(produto);
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    produtosDAO.salva(produto, function(erros,resultado) {
      console.log(erros);
      res.redirect('/produtos');
    });
  });

}

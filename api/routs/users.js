module.exports = function(app) {

  app.get('/usersData', function(req, res){
    console.log('Recebido os users do get');
    var connection = app.DAO.connection();
    var userDao = new app.DAO.userDao(connection);
    var user = [];
    userDao.list(user,function(error,result){
      if (error) {
        console.log(error);
        res.status(500).send(error);
        return;
      }

      res.status(200).send(JSON.stringify(result));
      console.log(result);
    });
    connection.end();
  });

  app.post('/newUser',function(req,res){
    var error = req.validationErrors();

    if (error) {
      console.log("erros encontrados");
      res.status(400).send(error);
      return;
    }

    var newUser = req.body;
    console.log(newUser);
    var connection = app.DAO.connection();
    var userDao =  new app.DAO.userDao(connection);

    userDao.saveUser(newUser,function(error,result){
      if (error) {
        console.log(error);
        res.status(500).send(error)
      }
      console.log('user criado');
      res.status(201).json(result);
    });
    connection.end();
  });
};

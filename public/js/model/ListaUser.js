class ListaUser {

    constructor(data) {
        this._users = [data];
    }

    addUser(user) {
        this._users.push(user);
    }

  reciveUsers(){
    fetch('/usersData')
      .then(response => response.json()
        .then(data => {
          listaUser = new ListaUser(data);
        }))
    .catch(function(error) {
      console.log(error);
    });
    }

}

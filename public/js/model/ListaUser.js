class ListaUser {

    constructor(data) {
        this._users = [data];
        console.log(this._users);
    }

    addUser(user) {
        this._users.push(user);
        console.log(this._users);
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

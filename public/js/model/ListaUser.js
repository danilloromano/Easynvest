class ListaUser {

    constructor() {
        this._users = [];
    }

    addUser(user) {
        this._users.push(user);
        console.log(user);
    }

    get users() {
        return [].concat(this._users);
    }

  reciveUsers(){
    fetch('/usersData')
      .then(response => response.json()
        .then(data => {
          this._users.push(data);
          console.log(this._users);
        }))
    .catch(function(error) {
      console.log(error);
    });
    }

}
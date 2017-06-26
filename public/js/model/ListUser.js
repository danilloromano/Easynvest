class ListUser {

    constructor(data) {
        this._users = [data];
    }

    addUser(user) {
        this._users.push(user);
    }

  reciveUsers() {
    fetch('/usersData')
      .then(response => response.json()
        .then(data => {
          listUser = new ListUser(data);
        }))
    .catch(function(error) {
      console.log(error);
    });
  }

}

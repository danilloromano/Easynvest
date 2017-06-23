function userDao(connection) {
    this._connection = connection;
};

userDao.prototype.saveUser = function(newUser,callback) {
    this._connection.query('INSERT INTO users SET ?',newUser, callback);
};

userDao.prototype.list = function(user,callback) {
    this._connection.query("select * from users;", user, callback);
};

module.exports = function(){
    return userDao;
};

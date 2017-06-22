
var mysql  = require('mysql');

function createDBConnection(){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'dfromano1',
            database: 'easynvest'
        });
}

module.exports = function() {
    return createDBConnection;
}

const connection = require("../config/connection.js");

let orm = {
    all: function (table, callBack) {
        let queryString = 'SELECT * FROM ' + table + ';';
        connection.query(
            queryString, function (err, result) {
                if (err) {
                    throw err;
                }
                else {
                    callBack(result);
                }
            }
        )
    },
    create: function () { },
    update: function () { },
    delete: function () { }
}
// SELECT ALL


// INSERT

// UPDATE
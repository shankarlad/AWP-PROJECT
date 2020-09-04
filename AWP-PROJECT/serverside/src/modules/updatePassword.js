let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");



let updatePassword = async (input) => {
    try {

        let Connection = mysql.createConnection(config.dbCon);

        await Connection.connectAsync();

        let sql = "UPDATE USER SET PASSWORD=? WHERE EMAIL=?";
        await Connection.queryAsync(sql, [
            input.password,
            input.email,
        ]);

        await Connection.endAsync();

    } catch (err) {
        console.log(err.message);
    }

};

module.exports = { updatePassword };
let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");

//reading users by json object
let loginData = async (input) => {


    let Connection = mysql.createConnection(config.dbCon);

    await Connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE EMAIL=? AND PASSWORD=?";

    let result = await Connection.queryAsync(sql, [input.email, input.password]);

    await Connection.endAsync();

    if (result.length === 0) {
        throw new Error("Invalid Credential");
    }
};

module.exports = { loginData };
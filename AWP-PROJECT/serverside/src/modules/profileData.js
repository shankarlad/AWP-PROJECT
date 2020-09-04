let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");

//reading users by json object
let profileData = async (input) => {


    let Connection = mysql.createConnection(config.dbCon);

    await Connection.connectAsync();

    let sql = "SELECT * FROM USER";

    let result = await Connection.queryAsync(sql);

    await Connection.endAsync();

    return result;
};

module.exports = { profileData };
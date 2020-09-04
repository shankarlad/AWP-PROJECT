let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");


let addData = async (input) => {
    try {

        let Connection = mysql.createConnection(config.dbCon);

        await Connection.connectAsync();

        let sql = "INSERT INTO USER(FNAME,LNAME,EMAIL,PASSWORD) VALUES(?,?,?,?)";
        await Connection.queryAsync(sql, [
            input.fname,
            input.lname,
            input.email,
            input.password,
        ]);

        await Connection.endAsync();

    } catch (err) {
        console.log(err.message);
    }

};

module.exports = { addData };
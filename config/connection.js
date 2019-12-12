const mysql = require("mysql");
const util = require("util");

let PSWD = process.env.MYSQL_PSWD;
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: PSWD,
  database: "emplmang"
});

function dbConnect() {
  // console.log("here");
  return {
    query(sql, args) {
      return util.promisify( connection.query)
        .call ( connection, sql, args);
    },
    close() {
      console.log("closing");
      return util.promisify( connection.end ).call(connection);
    }
  };
};

module.exports =  dbConnect();
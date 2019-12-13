const mysql = require("mysql");

const PSWD = process.env.MYSQL_PSWD;
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: PSWD,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
})

module.exports =  connection;
/*
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
*/
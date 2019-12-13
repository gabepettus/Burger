const db = require("./connection.js");

// Object Relational Mapper (ORM)
const orm = {
  all: function(tableName,cb) {
    let sql = "SELECT * FROM ??;";

    db.query(sql, [tableName], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  create: function(tableName, colsToIns, valsToIns, cb) {
    const cols = '??,'.repeat(colsToIns.length).slice(0,-1);
    const vals = '?,'.repeat(colsToIns.length).slice(0,-1);

    const sql = `INSERT INTO ?? (${cols}) VALUES (${vals});`;
    console.log(sql);

    db.query(sql, [tableName, colsToIns, valsToIns], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  update: function(tableName, colsToUp, valsToUp, cb) {
    const cols = '?? = ?'.repeat(colsToIns.length()).slice(0,-1);
    const vals = '?,'.repeat(colsToIns.length()).slice(0,-1);

    // const sql = `UPDATE ?? SET (${cols}) VALUES (${vals});`;
    const sql = `SELECT * from burgers;`;

    db.query( sql, function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
    });
  }
};

module.exports = orm;
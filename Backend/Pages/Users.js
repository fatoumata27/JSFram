
const db = require('../db/mysql');

module.exports = function(req,res){

    db.query("SELECT * FROM user limit 10",(err, result, fields) => {
        res.setHeader('Content-Type', 'application/json');
        if (err) throw err;
        res.end(JSON.stringify(result));
    });

}
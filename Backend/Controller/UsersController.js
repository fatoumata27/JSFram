
const db = require('../db/mysql');


module.exports  = {

    index: function(req,res) {
         db.query("SELECT * FROM user limit 10",(err, result, fields) => {
            res.setHeader('Content-Type', 'application/json');
            if (err) throw err;
            res.end(JSON.stringify(result));
        });
    },

    create: function(req,res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify('user created'));
    },

    read: function(req,res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify('user ' . req.params.id));
    }

}


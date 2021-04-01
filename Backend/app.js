const express = require('express');
const app = express();
const routes = require('./config/routes');

Object.keys(routes).forEach(element => {
    
    const {method,callback} = routes[element];
    
    switch(method){
        case 'get':
            app.get(element,callback);
            break;
        case 'post':
            app.post(element,callback);
            break;
        case 'put':
            app.put(element,callback);
            break;
        case 'delete':
            app.delete(element,callback);
            break;
        default:
            app.all(element,callback);
            break;
    }
  
});


/*

For example

app.get('/',function(req,res){
    res.send('Salut, bienvenue sur notre site');
});
*/


module.exports = app;



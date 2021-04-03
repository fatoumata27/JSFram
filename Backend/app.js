const express = require('express');
const app = express();
const routes = require('./config/routes');

Object.keys(routes).forEach(Element => {

    let r = routes[Element];

    if (r !== undefined) {
        
        route = app.route(Element);
        
        if(r.get !== undefined) route.get(r.get);
        
        if(r.post !== undefined) route.post(r.post);

        if(r.delete !== undefined) route.get(r.delete);

        if(r.put !== undefined) route.get(r.put);

    }

});

module.exports = app;




const HomeController = require('../Controller/HomeController');
const UsersController = require('../Controller/UsersController');

module.exports = {
    '/': {
        'method' : "get",
        'callback': HomeController.index,
    },
    '/users': {
        'method' : "get",
        'callback': UsersController.index
    }
}
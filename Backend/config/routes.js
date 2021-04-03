
const HomeController = require('../Controller/HomeController');
const UsersController = require('../Controller/UsersController');

module.exports = {
    '/users': {
        'get': UsersController.index,
        'post': UsersController.create,
    },
    '/users/:id':{
        'get': UsersController.read,
    }
}

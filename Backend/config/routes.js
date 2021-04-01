
const home = require('../Pages/Home');
const users = require('../Pages/Users');

module.exports = {
    '/': {
        'method' : "get",
        'callback': home,
    },
    '/users': {
        'method' : "get",
        'callback': users
    }
}
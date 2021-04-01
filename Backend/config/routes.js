
const home = require('../Pages/Home');
const about = require('../Pages/About');

module.exports = {
    '/': {
        'method' : "get",
        'callback': home,
    },
    '/about': {
        'method' : "get",
        'callback': about
    }
}
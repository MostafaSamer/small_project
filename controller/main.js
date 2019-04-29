const bodyParser = require('body-parser');
const save_data = require('./save_data');
const check_data = require('./check_data');

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render("login")
    })

    app.get('/reg', function(req, res) {
        res.render("register");
    })


    app.post('/reg_log', urlencodedParser, function(req, res) {
        save_data(req.body);
        res.redirect('/');
    })

    app.post('/log_show', urlencodedParser, function(req, res) {
        check_data(req.body);
    })

}

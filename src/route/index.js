const homeControllers = require("../app/controllers/homeControllers");

function route(app) {

    app.get('/home',(req,res) => {
        res.render('home');
    });


}
module.exports = route;

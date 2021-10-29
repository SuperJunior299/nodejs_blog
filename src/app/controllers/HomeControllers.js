class HomControllers {

        index(req, res) {
            res.render('home');
        }

}

module.exports = new HomControllers;
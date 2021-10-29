const route = require('color-convert/route');
const express = require('express');
const homeControllers = require('../app/controllers/HomeControllers');
const router = express.Router()
const HomControllers = require('../app/controllers/HomeControllers')

// homeControllers.index

router.use('/',homControllers.index)

module.exports = router;
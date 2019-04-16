let express = require('express');
let router = express.Router();
let index = require('../controller/indexController');

router.get('/', index.getIndex)

module.exports = router;
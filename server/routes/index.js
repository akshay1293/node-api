const express = require('express');
const router = express.Router();
const user = require('./users');
const task = require('./tasks');


router.use('/users', user);
router.use('/tasks', task);




module.exports = router;
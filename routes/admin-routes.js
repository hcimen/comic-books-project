const adminCtrl = require('../controllers/admin-controller')
const express = require('express');
const router = express.Router();

router.route('/')
    .get(adminCtrl.admin)

router.route('/create-book')
    .get(adminCtrl.create)
    .post(adminCtrl.create_new_comic)

router.route('/update-book/:_id')
    .get(adminCtrl.update)
    .put(adminCtrl.update_comic)
    .delete(adminCtrl.delete_comic)

module.exports = router; 
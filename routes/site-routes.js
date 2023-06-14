const siteCtrl = require('../controllers/site-controller')
const express = require('express');
const router = express.Router();

router.route('/')
    .get(siteCtrl.index)

router.route('/about')
    .get(siteCtrl.about)

router.route('/login')
    .get(siteCtrl.login)
    .post(siteCtrl.login_post)

router.route('/register')
    .get(siteCtrl.register_get)
    .post(siteCtrl.register_post)

router.route('/auth/google')
    .get(siteCtrl.google_get)

router.route('/auth/google/comics')
    .get(siteCtrl.google_redirect_get)

router.route('/logout')
    .get(siteCtrl.logout)

router.route('/registereduser')
    .get(siteCtrl.registereduser)

module.exports = router;
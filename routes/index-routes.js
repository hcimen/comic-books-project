const express = require('express');
const router = express.Router();

const siteRoutes = require('./site-routes');
const adminRoutes = require('./admin-routes');
const bookRoutes = require('./book-routes');


router.use('/', siteRoutes);
router.use('/books', bookRoutes);
router.use('/admin-console', adminRoutes);

module.exports = router;
'use strict';

const express = require('express');
const contentRoutes = require('./content.route');
const rssRoutes = require('./rss.route');
const testRoutes = require('./test.route');

const router = express.Router();

// mount routes
router.use('/content', contentRoutes);
router.use('/rss', rssRoutes);
router.use('/test', testRoutes);


module.exports = router;

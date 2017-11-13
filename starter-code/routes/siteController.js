const express = require('express');
const siteController = express.Router();
const bcrypt = require('bcrypt');
const ensureLogin = require('connect-ensure-login');
const passport = require('passport');

const User = require('../models/user');
const Course = require('../models/course');

const router = express.Router();
const bcryptSalt = 10;

siteController.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/login', function (req, res, next) {
  res.render('views/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: 'private-page',
  failureRedirect: '/login',
  failureFlash: true,
  passReqToCallback: true
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = siteController;
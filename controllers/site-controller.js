const Comic = require('../models/comic-model');
const User = require('../models/user-model');
const passport = require('passport');
const express = require('express');


module.exports = {
    index: (req, res) => {
        Comic.find({}, (error, allComics) => {
        if(error){
          return error;
        } else {
          res.render('pages/index', {
            comicData: allComics 
        });
        }
    })
    }, 
    about: (req, res) => {
        res.render('pages/about')
    },

    login:(req, res) => {
        res.render('pages/login')
    },
 
    register_get: (req, res) => {
        res.render('pages/register');
    },

    register_post: (req, res) => { 
        const {username, password} = req.body;
        User.register(
            {username: username}, 
            password, 
            (error, user) => {
            if(error) {
                if (error.name === 'UserExistsError') {
                    console.log('A user with the given username is already registered.');
                    res.render('./pages/registereduser');
                    console.log(error);
                } else {
                    console.log(error);
                    res.redirect('/register');
                    console.log(req);
                  }
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin-console');
                    console.log(req);
                })
            }
            })
    },

    google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),

    google_redirect_get: [
        passport.authenticate('google', {failureRedirect: '/login'}),
        function(req, res) {
            if(req.user){
            res.redirect('/admin-console')
            } else {
            res.redirect('/login');    
            }            
        },
    ],
    
    login_post:(req, res) => {
        const {username, password} = req.body;
        const user = new User({
            username: username, 
            password: password,
        });
        req.login(user, (error) => {
            console.log(res);
            if(error) {
                res.redirect('/login')
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin-console');
                });
            }
            })
    },    

    logout: (req, res) => {
        req.logout();
        res.redirect('/login')
    },

    registereduser: (req, res) => {
        res.render('/registereduser')
    },
}
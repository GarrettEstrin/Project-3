var User = require('../models/User.js'),
    passport = require('passport'),
    randomWord = require('../words.js')


module.exports = {
  //render login view
  login: function(req, res){
    res.render('login')

  },

  // createSession: function(){
  //   passport.authenticate('local-login', {
  //   successRedirect: '/games',
  //   failureRedirect: '/'
  //   }
  // )},



  //render the signup view
  new: function(req, res){
    res.render('signup', {message: req.flash('signupMessage')})
  },

  // createUser: function(){passport.authenticate('local-signup', {
  //   successRedirect: '/games',
  //   failureRedirect: '/signup'
  // })}



}

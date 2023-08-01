const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/signup', function (req, res) {
  res.render('pages/signup');
});

router.get('/login', function (req, res) {
  res.render('pages/login');
});

router.get('/admin',async (req, res) => {
  let data = await user.find()
  res.render('pages/admin',{data});
});

router.post('/signup', async function (req, res) {
  const data = await user.create(req.body)
  res.render('pages/login');
})

router.post('/login', async function(req, res) {
  try {
    const data = await user.findOne({email:req.body.email,password:req.body.password })
    // console.log("data",data)
    if (data?.email && data?.role == "user") {
      req.session.user = data
      // console.log("req.body",req.body)
      res.redirect('/');
    }else if(data?.email && data?.role == "admin"){
      req.session.admin = data
      res.redirect('/admin');
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    // console.log("data", data)
    res.redirect('/login');
  }

});


module.exports = router
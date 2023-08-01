const express = require('express')
const router = express.Router()
const user = require('../models/user')

router.get('/getdata', async (req, res) => {
  try {
    let data = await user.find()
    res.render('pages/signup', { data })
  } catch (error) {
    // console.log(data)
  }
});

module.exports = router
const express = require('express')
const router = express.Router()

router.get('/services',(req,res)=>{
    res.render('OurServices')
})

router.get('/contacts',(req,res)=>{
    res.render('Contactus')
})

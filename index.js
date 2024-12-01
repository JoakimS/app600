const express = require('express')()

express.get('/',(req,res)=>{
    res.send('welcome')
})


express.listen(7500,()=>{
    console.log("app is listening 7500")
})
const express = require('express')()

express.get('/',(req,res)=>{
    res.send('welcome render')
})


express.listen(7500,()=>{
    console.log("app is listening 7500")
})
const express = require('express')
const userRouter = require("./user")
const app = express()


app.use('/user',userRouter)

app.listen(9003,()=>{
    console.log("成功")
})

const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017'
mongoose.connect(DB_URL)
// mongoose.connection.on('connected',function(){
//         console.log(121)
// })
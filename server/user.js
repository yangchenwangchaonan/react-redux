const express = require('express')
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const User = model.getModel('user') 


Router.get('/list',(req,res)=>{
   User.find(function(err,doc){
       return res.json(doc)
   })
})
Router.post('/register',(req,res)=>{
    const {user,pwd,type} = req.body
    User.findOne({user},function(err,doc){
        if(doc) {
            return res.json({code:1,msg:'用户名重复'})
        }
        User.create({user,pwd:md5Pwd(pwd),type},function(e,d){
            if (e) {
                return res.json({code:1,msg:'后端出错了'})
            }
            return res.json({code:0})
        })
    })
})
Router.get('/info',(req,res)=>{
    return res.json({code:1})
})
function md5Pwd(pwd) {
    const salt = 'imooc_is_good_3957xByza6!@#$%yfusdjfsdf~~'
    return utils.md5(utils.md5(pwd+salt))
}
module.exports = Router
const express = require('express')
const { UserRt } = require('.')
const { User } = require('../models')
const usersRt = express.Router()


usersRt.get('/',async (reqq,res)=>{
    const totalUsers=await User.findall()
    res.json(totalUsers)
})

usersRt.get('/:name',async(req,res)=>{
    const user=await User.findOne({where:{name: req.params.name}})
    res.json(user)
})

module.exports = { usersRt}
const {db}= require('../db/db')
const {DataTypes} = require('sequelize')


let Review = db.define('review', {
    name:{
        type:DataTypes.STRING
    },
    watch: {
        type: DataTypes.BOOLEAN
    },
    userRating:{
        type: DataTypes.FLOAT
        }
    
})


module.exports = { Review}
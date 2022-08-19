const {db}= require('../db/db')
const {DataTypes} = require('sequelize')


let Movie = db.define('movie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    runtime: {
        type: DataTypes.INTEGER
    },
    genre:{
        type: DataTypes.STRING
    }
})


module.exports = { Movie}
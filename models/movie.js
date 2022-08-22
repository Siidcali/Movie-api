const {db}= require('../db/db')
const {DataTypes} = require('sequelize')
const { Review } = require('./Review')


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
    },
    // rating:{
    //     type:DataTypes.VIRTUAL,
    //     async get(){
    //         const totalRating=await Review.sum('userRating',{where:{movieId:this.getDataValue('id')}})
    //         const count=await Review.count({where:{movieId:this.getDataValue('id')}})
    //         if(count){
    //             this.setDataValue('rating',Math.round((totalRating/count)*10)/10)
    //             console.log( ` rating is ${this.getDataValue('rating')}`)
    //     }
    //     },
    //     async set(){
    //         const totalRating=await Review.findAll({where:{movieId:this.getDataValue('id')}})
    //         const count=await Review.count({where:{movieId:this.getDataValue('id')}})
    //         if(count){
    //             this.setDataValue('rating',Math.round((totalRating/count)*10)/10)
    //             console.log( `new rating is ${this.getDataValue('rating')}`)
    //     }
    // }

    // }
})


module.exports = { Movie}
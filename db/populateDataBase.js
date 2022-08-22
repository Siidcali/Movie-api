const {db} = require('./db')
const {userList, movieList,reviewList} = require('./seed')
const {User, Movie, Review} = require('../models')


let populateDataBase = async () => {
    await db.sync({force: true})

    await Promise.all(userList.map((u)=> User.create(u)))
    await Promise.all(movieList.map((m) => {Movie.create(m)}))
    await Promise.all(reviewList.map((u)=> Review.create(u)))


    const user = await User.findByPk(1)
    const movies = await Movie.findAll()

    user.addMovie(movies[0],{through:{ watch:true}})
}

let buildDB = async () => {
    await populateDataBase()
}

module.exports = {buildDB}
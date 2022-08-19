const express = require('express')
const {buildDB} = require('./db/populateDataBase')
const { UsersRt,moviesRt } = require('./routes/')
const { usersRt } = require('./routes/users')
const app = express()
const PORT = 3000 

buildDB()

app.use(express.json())
app.use('/users',usersRt)
app.use('/movies',moviesRt)








app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
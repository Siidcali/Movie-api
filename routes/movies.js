const express = require('express')
const { Movie } = require('../models')
const moviesRt = express.Router()

 moviesRt.get('/',async(req,res)=>{
    
    if (Array.isArray(req.query.genre)){
        const mGenre=await Promise.all(req.query.genre.map((g)=>Movie.findAll({where:{genre:g}})))
        return res.json(mGenre)
    }
    if (req.query.genre){
        const mGenre=await Movie.findAll({where:{genre:req.query.genre}})
        return res.json(mGenre)
    }
    

    const allMovies = await Movie.findAll()
    res.json(allMovies)
 })

 moviesRt.get('/:movie',async(req,res)=>{
    const movie = await Movie.findOne({where:{name:req.params.movie}})
    res.json(movie)
 })

moviesRt.delete('/:movie',async(req,res)=>{
   const store=await Movie.destroy({where:{name:req.params.movie}})
  if(store){
    res.send(`${req.params.movie} is deleted`)
  }
    
})

module.exports = { moviesRt }
const pool = require("./config.js");
const express = require("express");
const router = express.Router();


module.exports = router

// http://localhost:3000
router.get("/film", (req, res) => {

    const query =`
    SELECT * FROM film`

    pool.query(query, (err, response) => {
        if(err) throw err

        res.status(200).json(response.rows)
    })
})

router.get("/film/:title", (req, res) => {
    const {title} = req.params;

    const Query = `
        SELECT 
            title
        FROM film ;
    `

    pool.query(Query, [title], (err, response) => {
        if(err) throw err

        res.status(200).json(response.rows[0])
    })
})

router.get("/category/:name", (req, res) => {
    const {name} = req.params;

    const Query = `
        SELECT 
            *
        FROM category ;
    `

    pool.query(Query, [name], (err, response) => {
        if(err) throw err

        res.status(200).json(response.rows[0])
    })
})

router.get("/film/:film_id", (req, res) => {
    const {film_id} = req.params;

    const Query = `
        SELECT 
            *
        FROM film 
        WHERE film_id = $1;
    `

    pool.query(Query, [film_id], (err, response) => {
        if(err) throw err

        res.status(200).json(response.rows[0])
    })
})

router.get("/category/:category_id", (req, res) => {
    const {category_id} = req.params;

    const Query = `
        SELECT 
            *
        FROM category 
        WHERE category_id = $1;
    `

    pool.query(Query, [category_id], (err, response) => {
        if(err) throw err

        res.status(200).json(response.rows[0])
    })
})


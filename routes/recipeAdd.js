var express = require("express");
var router = express.Router();
var db_connection = require('../database/connection');
 
router.get("/recipeAdd", function(req,res,next) {
    console.log("pls");
    res.render('index', {title: 'Home'})
});

router.post('/recipeAdd', function(req,res) {
    console.log("pls");
    res.render('recipeAdd', {title: 'Recipe List'})
    console.log(req.body);

    //let sql = `INSERT INTO books (title, author) VALUES (?,?)`;
    //db_connection.query(sql,[req.body.title,req.body.author], (err,result) => {

    //})
})

router.get("/", function(req,res,next) {
    res.render('recipeAdd', {title: 'Recipe List'})
});



module.exports = router;
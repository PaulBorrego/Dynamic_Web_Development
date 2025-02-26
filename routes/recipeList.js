var express = require("express");
var router = express.Router();
var db_connection = require('../database/connection');
 
router.get("/", function(req,res,next) {
    let sql = 'SELECT * FROM recipes;';

    db_connection.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.render('recipeList', {recipes: result, title: 'Recipe List'})
    })
});

module.exports = router;
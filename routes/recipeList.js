var express = require("express");
var router = express.Router();
var db_connection = require('../database/connection');
 
router.get("/", function(req,res,next) {
    let sql = 'SELECT * FROM foods;';

    db_connection.query(sql,(err,result) => {
        if(err) throw err;
        res.render('recipeList', {foods: result, title: 'Recipe List'})
    })
});

module.exports = router;
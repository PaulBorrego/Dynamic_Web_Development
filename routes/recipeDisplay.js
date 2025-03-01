var express = require("express");
var router = express.Router();
var db_connection = require('../database/connection');

router.get("/", (req,res) => {
    console.log(req.query.ID);
    let sql = 'SELECT * FROM recipes WHERE Recipe_FK=\'' + req.query.ID + '\'';

    db_connection.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result[0]);
        res.render('recipeDisplay', {recipe: result[0]})
    })

});

module.exports = router;
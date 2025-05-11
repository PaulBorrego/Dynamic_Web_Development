var express = require("express");
var router = express.Router();
var db_connection = require('../database/connection');
 
router.post('/', function(req,res) {
    let sql1 = `
    INSERT INTO recipes 
    (
    Meal, Items, Directions
    )
    VALUES
    (
    ?, ?, ?
    );`
    ;

    db_connection.query(sql1,[req.body.Meal, req.body.Items, req.body.Directions], (err, result) => {
        if(err) throw err;
        let fork = 'SELECT Recipe_FK FROM recipes WHERE Meal=\'' + req.body.Meal + '\';';
        db_connection.query(fork,(err,foreign) => {
            if(err) throw err;
            let sql2 = `
            INSERT INTO foods 
            (
            Product, Protein, Recipe_FK, Img, Img_alt
            )
            VALUES
            (
            ?, ?, ?, ?, ?
            );`;
            let img_alt = "Picture of " + req.body.Meal;
            db_connection.query(sql2,[req.body.Meal, req.body.Protein, foreign[0].Recipe_FK , req.body.Img, img_alt ], (err, _) => {
                if(err) throw err;
                res.redirect('/');
            });
        });         
    });
})

router.get("/", function(req,res,next) {
    res.render('recipeAdd', {title: 'Recipe List'})
});

//url paramater

module.exports = router;
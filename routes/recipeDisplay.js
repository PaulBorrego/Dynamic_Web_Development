var express = require("express");
var router = express.Router();

router.get("/", (req,res) => {
    res.render("recipeDisplay", {title: "recipeDisplay" });
});

module.exports = router;
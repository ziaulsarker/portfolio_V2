const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res, next ) =>{
    res.render("index", {
        title: "Ziaul Sarker"
    });
    next();
})

// router.get("/resume", (req, res, next) => {
//       fs.createReadStream("./public/resume/ZiaulSarker-Resume.pdf").pipe(res);
//       next();
// });

module.exports = router; 
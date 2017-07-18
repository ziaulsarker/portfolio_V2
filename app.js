"use strict";

const express = require("express"),
      fs = require("fs"),
      os = require("os"),
      app = express(),
      router = require("./Router/router.js");


let host ="127.0.0.1";
let port = process.env.port || 3000;

app.use("/assets", express.static("./public"));

app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", router);

app.get("/resume", (req, res) => {
    fs.createReadStream(__dirname + "/public/resume/Ziaul_Sarker_Resume.pdf").pipe(res);
})


app.listen(port, host, ()=>{
    console.log(`server is running on ${host}:${port}`);
})


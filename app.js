const express = require('express');
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    const instagram = require("./data.json");
    const data = instagram["dogs"];
        res.render("index", { data });

});
 app.get("/dogs", (req, res) => {
    const instagram = require("./data.json");
    const data = instagram["dogs"];
    if (data) {
        res.render("index", { data });
    } else {
        res.render("error-page");
 }});
 app.get("/cats", (req, res) => {
    const instagram = require("./data.json");
    const data = instagram["cats"];
    if (data) {
        res.render("index", { data });
    } else {
        res.render("error-page");
 }});
app.listen(8080, () => {
    console.log("server start from localhost 8080");
});

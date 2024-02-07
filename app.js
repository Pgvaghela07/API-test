const express = require('express');
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/:username", (req, res) => {
    let { username } = req.params;
    const instagram = require("./data.json");
    const data = instagram[username];
    if (data) {
        res.render("index", { data });
    } else {
        res.render("error-page");
    }
});

app.listen(8080, () => {
    console.log("server start from localhost 8080");
});

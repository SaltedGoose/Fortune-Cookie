import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    res.render("index.ejs");
})

app.get("/fortunes", (req, res) => {
    const fortunes = JSON.parse(fs.readFileSync('fortunes.json', 'utf8'));
    res.send(fortunes);
})

app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on Port: ${port}`);
})
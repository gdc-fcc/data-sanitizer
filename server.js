import express from "express"
import {inputCleaner, inputValidator} from "./middleware.js"

const app = express()

app.get("/", (req, res) => res.redirect("/form"))
app.get("/form", (req, res) => res.sendFile(import.meta.dirname + "/public/index.html"))

app.use(express.urlencoded({ extended: true }));

app.post("/submit", inputCleaner, inputValidator, (req, res) => {
    const {username, comment} = req.body
    res.json({username, comment})
})

app.listen(3000, () => console.log("spin up http://localhost:3000 ..."))
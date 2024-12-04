"use strict"
const express = require("express");
const app = express();
const PORT = 3000;
const postsRouter = require('./routers/post');
const posts = require("./data/post")

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog")
});

app.get("/bacheca", (req, res) => {
    let postTitles = ""
    posts.slice(1).forEach(element => {
        postTitles += (" " + element.title)
    });
    let counter = posts[0].conteggio
    let postArchive = {
        allPostsPro: postTitles,
        totalPostPro: counter,

    }
    res.json(postArchive);
});

app.use("/posts", postsRouter)

app.all('*', (req, res) => {
    res.status(404).send('<h1> ERROR 404, Not Found !!!</h1>');
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
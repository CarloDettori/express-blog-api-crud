"use strict"

const express = require("express");
const posts = require("../data/post");
const router = express.Router();

//read:  visualizzazione tutti elementi (index)
function index(req, res) {
    res.send("lista dei post")
};

//read:  visualizzazione 1 elemento (show)
function show(req, res) {
    const id = parseInt(req.params.id);
    const onePost = posts.find((item) => item.id === id);
    if (onePost) {
        res.json({
            success: true,
            onePost,
        });
    } else {
        res.status(404);
        res.json({
            success: false,
            message: "il post non esiste",
        });
    };
}

//create:  creazione 1 elemento (store)
function store(req, res) {
    res.send("creazione 1 post")
};

//update:  modifica interamente 1 elemento (update)
function update(req, res) {
    res.send("modifica interamente 1 post")
};

//update:  modifica parzialmente 1 elemento (modify)
function modify(req, res) {
    res.send("modifica parzialmente 1 post")
};

//delete:  eliminazione 1 elemento (destroy)
function destroy(req, res) {
    res.send("eliminazione 1 post")
};

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}

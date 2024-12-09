"use strict"

const express = require("express");
const posts = require("../data/post");
const router = express.Router();


//read:  visualizzazione tutti elementi (index)
function index(req, res) {
    const allPosts = [...posts]
    res.json(allPosts)
};

//read:  visualizzazione 1 elemento (show)
function show(req, res) {
    const id = parseInt(req.params.id);
    const onePost = posts.find((element) => element.id === id);
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
    let newId = 0;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id > newId) {
            newId = posts[i].id;
        }
    }
    newId += 1;
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
};

//update:  modifica interamente 1 elemento (update)
function update(req, res) {
    const id = parseInt(req.params.id);
    const item = posts.find((element) => element.id === id);
    if (!item) {
        res.status(404).json({
            success: false, message: "il post non esiste"
        });
        return;
    }
    console.log(req.body);
    for (let i in item) {
        if (i !== "id") {
            item[i] = req.body[i];
        }
    }
    console.log(posts);
    res.json(item);
};

//update:  modifica parzialmente 1 elemento (modify)
function modify(req, res) {
    const id = parseInt(req.params.id);
    const item = posts.find((element) => element.id === id);
    if (!item) {
        res.status(404).json({
            success: false, message: "il post non esiste"
        });
        return;
    }
    console.log(req.body);
    for (let i in item) {
        if (i !== "id") {
            item[i] = req.body[i];
        }
    }
    console.log(posts);
    res.json(item);
};

//delete:  eliminazione 1 elemento (destroy)
function destroy(req, res) {
    const id = parseInt(req.params.id);
    const onePost = posts.find((element) => element.id === id);
    if (onePost) {
        posts[id] = {
            deleteSuccess: true,
            error: "204",
            message: "post eliminato con successo",
        }
        res.json(posts)

    } else {
        res.status(404);
        res.json({
            success: false,
            error: "404",
            message: "il post non esiste",
        });
    };
};

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}

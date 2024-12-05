"use strict"

const express = require("express");
const posts = require("../data/post");
const router = express.Router();
router.get("/:tag", tagFilter);
//read:  visualizzazione 1 elemento (show)
function tagFilter(req, res) {
    const choosenTag = tag;
    const taggedPost = posts.filter((element) => element.tags.includes(tag));
    if (onePost.length == 0) {
        res.json(taggedPost);
    } else {
        res.status(404);
        res.json({
            success: false,
            message: "nessun post ha questo tag",
        });
    };
}

module.exports = tagFilter
"use strict"

const express = require("express")
const router = express.Router();
//read:  visualizzazione tutti elementi (index)
router.get("/", (req, res) => {
    res.send("lista dei post")
});

//read:  visualizzazione 1 elemento (show)
router.get("/:title", (req, res) => {
    let onePost = this.title;
    res.json(onePost);
});

//create:  creazione 1 elemento (store)
router.post("/", (req, res) => {
    res.send("creazione 1 post")
});

//update:  modifica interamente 1 elemento (update)
router.put("/:title", (req, res) => {
    res.send("modifica interamente 1 post")
});

//update:  modifica parzialmente 1 elemento (store)
router.patch("/:title", (req, res) => {
    res.send("modifica parzialmente 1 post")
});

//delete:  eliminazione 1 elemento (destroy)
router.delete("/:title", (req, res) => {
    res.send("eliminazione 1 post")
});

module.exports = router;

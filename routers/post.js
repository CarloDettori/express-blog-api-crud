"use strict"


const express = require("express")
const router = express.Router();

const {
    index,
    show,
    store,
    update,
    modify,
    destroy,
} = require("../controllers/postController");

//read:  visualizzazione tutti elementi (index)
router.get("/", index);

//read:  visualizzazione 1 elemento (show)
router.get("/:id", show);

//create:  creazione 1 elemento (store)
router.post("/", store);

//update:  modifica interamente 1 elemento (update)
router.put("/:id", update);

//update:  modifica parzialmente 1 elemento (modify)
router.patch("/:id", modify);

//delete:  eliminazione 1 elemento (destroy)
router.delete("/:id", destroy);

module.exports = router;

"use strict"
const posts = [
    { conteggio: 5 },
    {
        id: 1,
        title: "Ciambellone",
        content: "Il ciambellone è buono",
        image: "/public/img/ciambellone.jpeg",
        tags: ["dessert", "dolce", "feste"],
    },
    {
        id: 2,
        title: "Cracker di barbabietola",
        content: "Il cracker di barbabietola è buono",
        image: "/public/img/cracker-barbabietola.jpg",
        tags: ["snak", "dolce", "salutare"],
    },
    {
        id: 3,
        title: "Pane fritto dolce",
        content: "Il pane fritto dolce è buono",
        image: "/public/img/pane-fritto-dolce.jpg",
        tags: ["contorno", "salato", "cena"],
    },
    {
        id: 4,
        title: "Pasta alla barbabietola",
        content: "La pasta alla barbabietola è buona",
        image: "/public/img/pasta-barbabietola.jpg",
        tags: ["primo", "salto", "pranzo"],
    },
    {
        id: 5,
        title: "Torta paesana",
        content: "La torta paesana è buona",
        image: "/public/img/paesana.jpg",
        tags: ["dessert", "dolce", "tradizionale"],
    }
]

module.exports = posts;
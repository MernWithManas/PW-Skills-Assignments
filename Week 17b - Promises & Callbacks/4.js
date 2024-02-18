let books = [
    {
        title : "The Junglebook",
        author : "disney khanna",
        year : 1998
    },
    {
        title : "Amma ji ki batein",
        author : "dadi amma",
        year : 2007
    },
    {
        title : "Back Benchers",
        author : "TVF Dada",
        year : 2019
    },
    {
        title : "Zombies around the world",
        author : "disney khanna",
        year : 2022
    },
    {
        title : "Ek Parivaar",
        author : "Priyadarshan Saab",
        year : 1995
    },
    {
        title : "Manjhi - the mountain man",
        author : "Manjhi Putra",
        year : 2011
    }
]

function library(title) {
    title.sort();
    console.log(title.join(", "));
}

function organisedLibrary(books, callback) {
    let title = books.map((book) => book.title);
    callback(title);
}

organisedLibrary(books, library);
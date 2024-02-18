let books = [
    {
        name: "Yoga se Hoga",
        author: "Baba Ramdev",
        year: "2009"
    },
    {
        name: "The art of living",
        author: "Sadhguru",
        year: "2021"
    },
    {
        name: "Doglapan",
        author: "Ashneer Grover",
        year: "2023"
    },
    {
        name: "Money Explained",
        author: "Warren Buffet",
        year: "1987"
    },
    {
        name: "Atma se upar",
        author: "Gopal Swami Maharaj",
        year: "1999"
    }
]

// function before10s(books) {
//     let filterBooks =  books.filter((y) => y.year < 2010);

//     let newBooks = filterBooks.map((n) => ({
//         name: n.name,
//         author: n.author.toUpperCase(),
//         year: n.year
//     }))

//     return newBooks;
// }


// console.log(before10s(books));

let booksBefore10s = books.filter((y) => {
    return y.year < 2010;
})

let bb10sWithCapAuthor = booksBefore10s.map((n) => {
    return {
        ...n,
        author: n.author.toUpperCase(),
    };
})

console.log(bb10sWithCapAuthor);
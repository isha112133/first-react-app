const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const book = getBook(2);
book;

// const title = book.title;
// title;
// const author = book.author;
// author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, pages, publicationDate, genres, hasMovieAdaptation);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1]

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 120000,
};
console.log(updatedBook);

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
console.log(summary);

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages.`);

// function getYear(str) {
//   return str.split("-")[0];
// }
const getYear = (str) => {
  return str.split("-")[0];
};
console.log(getYear(publicationDate));

// short circuiting-The operator'll immediately return the 1st value & not even look at the 2nd value
console.log(true && "S");
console.log(
  false && "short circuiting works in & operator when 1st value is false"
);
console.log(hasMovieAdaptation && "This book has a movie");
console.log("jonas" && "Some string");
console.log(0 && "some string");

// falsy: 0, '', null, undefined
console.log(true || "some string"); // short cicuiting at first if it's truthy value
console.log(false || "some string");
console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "Not translated";
console.log(spanishTranslation);

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// console.log(countWrong);

// Nullish coalescing operator ?? (also does short circuiting for falsy values)
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// console.log(count);
// Will only return 2nd value When the 1st value is null or undefined but not when it's 0 or empty string

// Optional Chaining (const book = getBook(3))
function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount;
  return goodReads + librarything;
}
console.log(getTotalReviewCount(book)); // NaN

// Array map method
const books = getBooks();
books;
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
  return {
    // x: 23; not an object not return anything
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  };
}); // curly braces inside is declaration block

essentialData;

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter(
    (books) => books.genres.includes("adventure") // includes- returns either true or false
  )
  .map((book) => book.title);
adventureBooks;

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// 1st- want to pass in a fn
// 2nd- want starter value
// we're adding together all of these values, we'll start from 0.
// curr element & curr value of accumulator which starts at 0
// Acc- curr value of the final value that we want to boil the array down to (the pages of all the books combined which starts at 0, so in 1st iteration acc will be 0)

const y = [1, 2, 6, 4, 5];
// const sorted = y.sort((a, b) => b - a); // sort isn't a functional method like map or filter. A method that mutates so ti changes the original array, we didn't have to store this in a new array
// sorted;
y;
// In frontend framework like react, doesn't like mutating data so can use slice(will return brand new array which is copy of y)
const sorted1 = y.slice().sort((a, b) => b - a);
sorted1;
y;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// Immutable Arrays
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 12000 } : book
); // on id:1 it'll be {}
booksAfterUpdate;

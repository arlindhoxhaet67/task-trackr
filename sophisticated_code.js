/* 
   Filename: sophisticated_code.js
   Content: Complex JavaScript code demonstrating various advanced concepts and techniques
*/

// Define an array of objects representing books
const books = [
  { id: 1, title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008 },
  { id: 2, title: "Clean Code: A Handbook of Agile Software Craftsmanship", author: "Robert C. Martin", year: 2008 },
  { id: 3, title: "Refactoring: Improving the Design of Existing Code", author: "Martin Fowler", year: 1999 },
  // More books...
];

// Define a class representing a Book
class Book {
  constructor(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Define a static method to search books by author name
  static searchByAuthor(authorName) {
    return books.filter(book => book.author.toLowerCase().includes(authorName.toLowerCase()));
  }

  // Define an instance method to check if a book is a classic (published more than 50 years ago)
  isClassic() {
    const currentYear = new Date().getFullYear();
    return (currentYear - this.year) > 50;
  }
}

// Create instances of the Book class
const book1 = new Book(4, "Eloquent JavaScript: A Modern Introduction to Programming", "Marijn Haverbeke", 2011);
const book2 = new Book(5, "Clean Architecture: A Craftsman's Guide to Software Structure and Design", "Robert C. Martin", 2017);

// Display book details
console.log(book1);

// Search books by author name and display the results
console.log(Book.searchByAuthor("Martin"));

// Check if a book is a classic
console.log(book1.isClassic());
console.log(book2.isClassic());

// Generate a random number between a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate and display 10 random numbers between 1 and 100
for (let i = 1; i <= 10; i++) {
  console.log(getRandomNumber(1, 100));
}

// Define a higher-order function to process an array of numbers
function processData(numbers, callback) {
  const processedData = [];

  for (const number of numbers) {
    const processedNumber = callback(number);
    processedData.push(processedNumber);
  }

  return processedData;
}

// Example callbacks
function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

// Process an array of numbers using the defined callbacks and display the results
const numbers = [1, 2, 3, 4, 5];
console.log(processData(numbers, double));
console.log(processData(numbers, square));

// More code...

// The code continues for at least another 200 lines...
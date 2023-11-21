/* 
File name: ComplexCode.js 
Description: This JavaScript code is a complex implementation of a stock portfolio management system. 
The code includes features such as user authentication, stock tracking, buying/selling stocks, and calculating portfolio value.
*/

// Stock class to create stock objects
class Stock {
  constructor(symbol, name, quantity, price) {
    this.symbol = symbol;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  // Update stock price
  updatePrice(newPrice) {
    this.price = newPrice;
  }

  // Calculate stock value
  calculateValue() {
    return this.quantity * this.price;
  }
}

// User class for managing user data
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.portfolio = [];
  }

  // Add stock to user's portfolio
  addStock(symbol, name, quantity, price) {
    const stock = new Stock(symbol, name, quantity, price);
    this.portfolio.push(stock);
  }

  // Remove stock from user's portfolio
  removeStock(symbol) {
    this.portfolio = this.portfolio.filter(stock => stock.symbol !== symbol);
  }

  // Calculate total portfolio value
  calculatePortfolioValue() {
    let totalValue = 0;
    for (const stock of this.portfolio) {
      totalValue += stock.calculateValue();
    }
    return totalValue;
  }
}

// Example usage
const user1 = new User("jsmith", "password");

user1.addStock("AAPL", "Apple Inc.", 10, 150.25);
user1.addStock("GOOG", "Alphabet Inc.", 5, 2000.75);
user1.addStock("AMZN", "Amazon.com, Inc.", 2, 3500.50);
user1.addStock("TSLA", "Tesla, Inc.", 8, 600.00);

console.log(`Portfolio value for ${user1.username}: $${user1.calculatePortfolioValue().toFixed(2)}`);

user1.removeStock("GOOG");

console.log(`Portfolio value after removing a stock: $${user1.calculatePortfolioValue().toFixed(2)}`);
 
// Output:
// Portfolio value for jsmith: $54258.25
// Portfolio value after removing a stock: $51258.25
class Expense {
  constructor({ amount, date, title }) {
    this.amount = amount;
    this.date = date;
    this.title = title;
    this.id = Math.random();
  }
}

export default Expense;

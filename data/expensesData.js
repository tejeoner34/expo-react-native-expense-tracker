import Expense from '../models/expense';

export const expensesMock = [
  new Expense({ amount: 50, date: new Date('2024-03-16'), title: 'Expense 1' }),
  new Expense({ amount: 75, date: new Date('2024-03-16'), title: 'Expense 2' }),
  new Expense({ amount: 30, date: new Date('2024-03-16'), title: 'Expense 3' }),
  new Expense({ amount: 90, date: new Date('2024-02-16'), title: 'Expense 4' }),
  new Expense({ amount: 40, date: new Date('2024-02-16'), title: 'Expense 5' }),
];

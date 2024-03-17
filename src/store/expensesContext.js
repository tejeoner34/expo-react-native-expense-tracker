import { createContext, useState } from 'react';
import { expensesMock } from '../../data/expensesData';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (expenseData) => {},
  removeExpense: (id) => {},
  updateExpense: ({ id, newData }) => {},
  getPeriodExpenses: ({ days }) => {},
});

export function ExpensesContextProvider({ children }) {
  const [expenses, setExpenses] = useState(expensesMock);

  function addExpense(expenseData) {
    setExpenses((oldValue) => [expenseData, ...oldValue]);
  }

  function removeExpense(id) {
    setExpenses((oldValue) => oldValue.filter((expense) => expense.id !== id));
  }

  function updateExpense({ id, newData }) {
    const expenseIndex = expenses.findIndex((expense) => expense.id === id);
    expenses[expenseIndex] = { ...expenses[expenseIndex], ...newData };
    setExpenses([...expenses]);
  }

  function getPeriodExpenses({ days }) {
    return !days
      ? expenses
      : expenses.filter((expense) => expense.date > Date.now() - days * 24 * 60 * 60 * 1000);
  }

  const value = {
    expenses,
    addExpense,
    removeExpense,
    updateExpense,
    getPeriodExpenses,
  };
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

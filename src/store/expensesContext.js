import { createContext, useState } from 'react';
import { expensesMock } from '../../data/expensesData';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: () => {},
  removeExpense: () => {},
  getPeriodExpenses: () => {},
});

export function ExpensesContextProvider({ children }) {
  const [expenses, setExpenses] = useState(expensesMock);

  function addExpense(expenseData) {
    setExpenses((oldValue) => [expenseData, ...oldValue]);
  }

  function removeExpense(id) {
    setExpenses((oldValue) => oldValue.filter((expense) => expense.id !== id));
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
    getPeriodExpenses,
  };
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

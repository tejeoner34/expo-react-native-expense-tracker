import { createContext, useState } from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: () => {},
  removeExpense: () => {},
});

export function ExpensesContextProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  function addExpense(expenseData) {
    setExpenses((oldValue) => [expenseData, ...oldValue]);
  }

  function removeExpense(id) {
    console.log(id);
    setExpenses((oldValue) => oldValue.filter((expense) => expense.id !== id));
  }

  const value = {
    expenses,
    addExpense,
    removeExpense,
  };
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

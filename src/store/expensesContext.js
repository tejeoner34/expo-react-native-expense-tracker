import { createContext, useState } from 'react';

const ExpensesContext = createContext({
  expenses: [],
  addExpense: () => {},
  removeExpense: () => {},
});

export function ExpensesContextProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  function addExpense(expenseData) {
    setExpenses((oldValue) => [...oldValue, expenseData]);
  }

  function removeExpense(id) {
    setExpenses((oldValue) => oldValue.filter((expense) => expense.id !== id));
  }

  const value = {
    expenses,
    addExpense,
    removeExpense,
  };
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

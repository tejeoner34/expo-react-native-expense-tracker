import { createContext } from 'react';
import { useExpenseService } from '../hooks/useExpenseService';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (expenseData) => {},
  removeExpense: (id) => {},
  updateExpense: ({ id, newData }) => {},
  getPeriodExpenses: ({ days }) => {},
  isLoading: false,
});

export function ExpensesContextProvider({ children }) {
  const {
    storeExpense,
    updateExpense: updateExpenseService,
    deleteExpense,
    isLoading,
    expenses,
  } = useExpenseService();

  function addExpense(expenseData) {
    storeExpense(expenseData);
  }

  function removeExpense(id) {
    deleteExpense({ id });
  }

  function updateExpense({ id, newData }) {
    updateExpenseService({ id, newData });
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
    isLoading,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

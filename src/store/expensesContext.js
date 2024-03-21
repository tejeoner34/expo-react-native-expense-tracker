import { createContext, useEffect, useState } from 'react';
import { expensesMock } from '../../data/expensesData';
import { useExpenseService } from '../hooks/useExpenseService';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (expenseData) => {},
  removeExpense: (id) => {},
  updateExpense: ({ id, newData }) => {},
  getPeriodExpenses: ({ days }) => {},
});

export function ExpensesContextProvider({ children }) {
  const {
    storeExpense,
    getOrderedExpenses,
    updateExpense: updateExpenseService,
    deleteExpense,
  } = useExpenseService();
  const [expenses, setExpenses] = useState([]);

  async function addExpense(expenseData) {
    const newExpenseId = await storeExpense(expenseData);
    setExpenses((oldValue) => [{ ...expenseData, id: newExpenseId }, ...oldValue]);
  }

  function removeExpense(id) {
    deleteExpense({ id });
    setExpenses((oldValue) => oldValue.filter((expense) => expense.id !== id));
  }

  function updateExpense({ id, newData }) {
    updateExpenseService({ id, newData });
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

  useEffect(() => {
    getOrderedExpenses().then((expenses) => {
      console.log(expenses);
      setExpenses([...expenses]);
    });
  }, []);

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

import axios from 'axios';
import Expense from '../../models/expense';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://expenses-tracker-d4c93-default-rtdb.europe-west1.firebasedatabase.app/';
export function useExpenseService() {
  const [isLoading, setIsLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);

  async function storeExpense(expense) {
    try {
      const response = await axios.post(BASE_URL + 'expenses.json', expense);
      setExpenses((oldValue) => [{ ...expenseData, id: response.data.name }, ...oldValue]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getExpenses() {
    setIsLoading(true);
    const expensesArray = [];
    try {
      const response = await axios.get(BASE_URL + 'expenses.json');
      // this should be done in an adapter or repository
      for (const key in response.data) {
        expensesArray.push(
          new Expense({
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            title: response.data[key].title,
          })
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    return expensesArray;
  }

  function updateExpense({ id, newData }) {
    try {
      axios.put(BASE_URL + `expenses/${id}.json`, newData);
      const expenseIndex = expenses.findIndex((expense) => expense.id === id);
      expenses[expenseIndex] = { ...expenses[expenseIndex], ...newData };
      setExpenses([...expenses]);
    } catch (error) {
      console.log(error);
    }
  }

  function deleteExpense({ id }) {
    try {
      axios.delete(BASE_URL + `expenses/${id}.json`);
      setExpenses((oldValue) => oldValue.filter((expense) => expense.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  function orderExpenses(expenses) {
    return expenses.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async function getOrderedExpenses() {
    const expenses = await getExpenses();
    return orderExpenses(expenses);
  }

  useEffect(() => {
    getOrderedExpenses().then((expenses) => {
      setExpenses([...expenses]);
    });
  }, []);

  return {
    storeExpense,
    updateExpense,
    deleteExpense,
    isLoading,
    expenses,
    setExpenses,
  };
}

import axios from 'axios';
import Expense from '../../models/expense';

const BASE_URL = 'https://expenses-tracker-d4c93-default-rtdb.europe-west1.firebasedatabase.app/';
export function useExpenseService() {
  async function storeExpense(expense) {
    const response = await axios.post(BASE_URL + 'expenses.json', expense);
    return { id: response.data.name };
  }

  async function getExpenses() {
    const response = await axios.get(BASE_URL + 'expenses.json');
    // this should be done in an adapter or repository
    const expensesArray = [];
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
    return expensesArray;
  }

  function updateExpense({ id, newData }) {
    return axios.put(BASE_URL + `expenses/${id}.json`, newData);
  }

  function deleteExpense({ id }) {
    axios.delete(BASE_URL + `expenses/${id}.json`);
  }

  function orderExpenses(expenses) {
    return expenses.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  async function getOrderedExpenses() {
    const expenses = await getExpenses();
    return orderExpenses(expenses);
  }

  return {
    getExpenses,
    getOrderedExpenses,
    storeExpense,
    updateExpense,
    deleteExpense,
  };
}

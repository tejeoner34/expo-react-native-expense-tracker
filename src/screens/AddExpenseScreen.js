import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AddExpenseForm from '../components/AddExpenseForm';
import { ExpensesContext } from '../store/expensesContext';

export default function AddExpenseScreen({ navigation }) {
  const { addExpense } = useContext(ExpensesContext);
  const handleAddExpense = (expenseData) => {
    addExpense(expenseData);
    navigation.goBack();
  };
  return (
    <View>
      <AddExpenseForm onCancel={() => navigation.goBack()} onConfirm={handleAddExpense} />
    </View>
  );
}

const styles = StyleSheet.create({});

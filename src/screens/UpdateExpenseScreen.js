import { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../constants/colors';
import { ExpensesContext } from '../store/expensesContext';
import AddExpenseForm from '../components/AddExpenseForm';
export default function UpdateExpenseScreen({ navigation, route }) {
  const { expenses, removeExpense, updateExpense } = useContext(ExpensesContext);
  const { expenseId } = route.params;
  const expense = expenses.find((expense) => expense.id === expenseId);

  const handleGoBack = () => {
    navigation.goBack();
  };
  const onDeleteExpense = () => {
    removeExpense(expenseId);
    handleGoBack();
  };

  const onUpdateExpense = (newData) => {
    updateExpense({ id: expenseId, newData });
    handleGoBack();
  };
  return (
    <View style={styles.container}>
      <AddExpenseForm expense={expense} onCancel={handleGoBack} onConfirm={onUpdateExpense} />
      <View style={styles.divider}></View>
      <TouchableOpacity onPress={onDeleteExpense}>
        <Ionicons style={{ alignSelf: 'center' }} name="trash" size={30} color={colors.danger} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
  divider: {
    height: 2,
    width: '80%',
    backgroundColor: colors.enphasis,
    alignSelf: 'center',
  },
});

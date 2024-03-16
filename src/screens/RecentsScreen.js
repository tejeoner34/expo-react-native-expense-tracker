import { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import ExpenseItem from '../components/ExpenseItem';
import Subheader from '../components/Subheader';
import { ExpensesContext } from '../store/expensesContext';
import ExpensesList from '../components/ExpensesList';

export default function RecentsScreen({ navigation }) {
  const { expenses } = useContext(ExpensesContext);
  const handleExpenseClick = (expense) => {
    navigation.navigate('RemoveExpense', {
      expenseId: expense.id,
    });
  };
  const lastWeekExpenses = () =>
    expenses.filter((expense) => expense.date > Date.now() - 7 * 24 * 60 * 60 * 1000);
  return (
    <View style={styles.container}>
      <Subheader title="Last 7 days" value="test" />
      <ExpensesList list={lastWeekExpenses()} onItemPress={handleExpenseClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
});

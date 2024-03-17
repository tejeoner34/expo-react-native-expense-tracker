import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExpensesContext } from '../store/expensesContext';
import Subheader from './Subheader';
import ExpensesList from './ExpensesList';
import { colors } from '../constants/colors';

export default function ExpensesSummary({ period, navigation }) {
  const { getPeriodExpenses } = useContext(ExpensesContext);
  const expenses = getPeriodExpenses({ days: period });

  const handleExpenseClick = (expense) => {
    navigation.navigate('RemoveExpense', {
      expenseId: expense.id,
    });
  };

  const totalValue = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const titleValue = period ? `Last ${period} days` : 'All Expenses';

  return (
    <View style={styles.container}>
      <Subheader title={titleValue} value={totalValue} />
      <ExpensesList list={expenses} onItemPress={handleExpenseClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

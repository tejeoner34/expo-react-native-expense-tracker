import { FlatList, StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { colors } from '../constants/colors';
import Subheader from '../components/Subheader';
import ExpenseItem from '../components/ExpenseItem';
import { ExpensesContext } from '../store/expensesContext';
import ExpensesList from '../components/ExpensesList';

export default function AllExpensesScreen({ navigation }) {
  const { expenses } = useContext(ExpensesContext);

  const handleExpenseClick = (expense) => {
    navigation.navigate('RemoveExpense', {
      expenseId: expense.id,
    });
  };

  return (
    <View style={styles.container}>
      <Subheader title="All expenses" value="test" />
      <ExpensesList list={expenses} onItemPress={handleExpenseClick} />
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

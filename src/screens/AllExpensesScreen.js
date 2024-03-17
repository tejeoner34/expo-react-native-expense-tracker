import { StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import ExpensesSummary from '../components/ExpensesSummary';
import { ExpensesContext } from '../store/expensesContext';
import { useContext } from 'react';

export default function AllExpensesScreen({ navigation }) {
  const { expenses } = useContext(ExpensesContext);

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} navigation={navigation} />
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

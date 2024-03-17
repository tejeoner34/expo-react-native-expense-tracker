import { StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import ExpensesSummary from '../components/ExpensesSummary';
import { ExpensesContext } from '../store/expensesContext';
import { useContext } from 'react';

const PERIOD = 7;
export default function RecentsScreen({ navigation }) {
  const { getPeriodExpenses } = useContext(ExpensesContext);
  const expenses = getPeriodExpenses({ days: PERIOD });

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} period={PERIOD} navigation={navigation} />
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

import { StyleSheet, Text, View } from 'react-native';

export default function ExpenseItem({ expense }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftBlock}>
        <Text>{expense.title}</Text>
        <Text>{expense.date}</Text>
      </View>
      <View style={styles.rightBlock}>
        <View style={styles.expenseContainer}>
          <Text>{expense.amount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  leftBlock: {},
  rightBlock: {},
  expenseContainer: {},
});

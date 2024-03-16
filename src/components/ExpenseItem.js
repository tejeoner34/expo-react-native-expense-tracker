import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function ExpenseItem({ expense, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftBlock}>
          <Text style={[styles.text, styles.title]}>{expense.title}</Text>
          <Text style={styles.text}>{expense.date.toLocaleDateString()}</Text>
        </View>
        <View style={styles.rightBlock}>
          <View style={styles.expenseContainer}>
            <Text style={styles.textSecondary}>{expense.amount}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftBlock: {
    gap: 5,
  },
  rightBlock: {
    backgroundColor: colors.enphasis,
    paddingRight: 15,
    paddingLeft: 15,
    padding: 5,
    borderRadius: 5,
  },
  expenseContainer: {},
  title: {
    fontWeight: 'bold',
  },
  text: {
    color: colors.text,
  },
  textSecondary: {
    color: colors.textSecondary,
  },
});

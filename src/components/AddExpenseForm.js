import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../constants/colors';
import Expense from '../../models/expense';

let expenseName = '';
let expenseAmount = 0;

export default function AddExpenseForm({ onCancel, onConfirm }) {
  const onAddExpenseName = (inputValue) => {
    expenseName = inputValue;
  };

  const onAddExpenseAmount = (inputValue) => {
    expenseAmount = Number(inputValue);
  };

  const onSubmit = () => {
    const expense = new Expense({ amount: expenseAmount, title: expenseName, date: new Date() });
    onConfirm(expense);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        placeholder="Add expense name..."
        style={styles.input}
        onChangeText={onAddExpenseName}
      />
      <TextInput
        placeholder="Add expense amount..."
        style={styles.input}
        onChangeText={onAddExpenseAmount}
      />
      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.button, styles.cancelButton]} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.confirmButton]} onPress={onSubmit}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    gap: 10,
    padding: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    height: 40,
    padding: 5,
    backgroundColor: colors.enphasis,
    fontSize: 17,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
  },
  button: {
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: 'transparent',
  },
  cancelButtonText: {
    color: colors.text,
    fontSize: 17,
  },
  confirmButton: {
    backgroundColor: colors.primary,
  },
  confirmButtonText: {
    color: colors.text,
    fontSize: 17,
  },
});

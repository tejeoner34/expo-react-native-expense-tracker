import { KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import Expense from '../../models/expense';
import CustomInput from './CustomInput';
import { useState } from 'react';

export default function AddExpenseForm({ onCancel, onConfirm, expense }) {
  const [formData, setFormData] = useState({
    amount: expense?.amount.toString() ?? '',
    title: expense?.title ?? '',
    date: expense?.date.toISOString().split('T')[0] ?? '',
  });

  const onAddFormData = (identifier, inputValue) => {
    setFormData((prev) => ({
      ...prev,
      [identifier]: inputValue,
    }));
  };

  const onSubmit = () => {
    const expense = new Expense({
      amount: Number(formData.amount),
      title: formData.title,
      date: new Date(formData.date),
    });
    onConfirm(expense);
  };

  return (
    <View>
      <CustomInput
        label="Amount"
        inputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: onAddFormData.bind(this, 'amount'),
          placeholder: 'Add expense amount...',
          value: formData.amount,
        }}
      />
      <CustomInput
        label="Expense Date"
        inputConfig={{
          onChangeText: onAddFormData.bind(this, 'date'),
          placeholder: 'YYYY-MM-DD',
          value: formData.date,
        }}
      />
      <CustomInput
        label="Expense Title"
        inputConfig={{
          onChangeText: onAddFormData.bind(this, 'title'),
          placeholder: 'Add expense name...',
          multiline: true,
          value: formData.title,
        }}
      />
      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.button, styles.cancelButton]} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.confirmButton]} onPress={onSubmit}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

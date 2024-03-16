import { useContext } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../constants/colors';
import { ExpensesContext } from '../store/expensesContext';
export default function RemoveExpenseScreen({ navigation, route }) {
  const { removeExpense } = useContext(ExpensesContext);
  const { expenseId } = route.params;
  const handleGoBack = () => {
    navigation.goBack();
  };
  const onDeleteExpense = () => {
    removeExpense(expenseId);
    handleGoBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.button, styles.cancelButton]} onPress={handleGoBack}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.confirmButton]} onPress={handleGoBack}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </Pressable>
      </View>
      <View style={styles.divider}></View>
      <TouchableOpacity onPress={onDeleteExpense}>
        <Ionicons name="trash" size={30} color={colors.danger} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 15,
  },
  buttonsContainer: {
    paddingTop: 20,
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
  divider: {
    height: 2,
    width: '80%',
    backgroundColor: colors.enphasis,
  },
});

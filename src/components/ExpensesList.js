import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

export default function ExpensesList({ list, onItemPress }) {
  return (
    <FlatList
      data={list}
      renderItem={({ item: expense }) => {
        return <ExpenseItem expense={expense} onPress={() => onItemPress(expense)} />;
      }}
      keyExtractor={(expense) => expense.id}
    />
  );
}

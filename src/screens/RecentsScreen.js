import { StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import ExpensesSummary from '../components/ExpensesSummary';

export default function RecentsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary period={7} navigation={navigation} />
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

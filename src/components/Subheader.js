import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function Subheader({ title, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.enphasis,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    color: colors.background,
  },
  value: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

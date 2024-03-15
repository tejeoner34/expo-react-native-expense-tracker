import { StyleSheet, Text, View } from 'react-native';

export default function Subheader({ title, value }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../constants/colors';

export default function CustomInput({ label, inputConfig }) {
  const inputStyles = [styles.input];

  if (inputConfig && inputConfig.multiline) {
    inputStyles.push(styles.multiLineInput);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...inputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 5,
    backgroundColor: colors.enphasis,
    fontSize: 17,
    borderRadius: 5,
  },
  label: {
    color: colors.text,
    fontSize: 15,
    marginBottom: 5,
  },
  multiLineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

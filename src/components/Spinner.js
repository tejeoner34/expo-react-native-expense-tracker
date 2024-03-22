import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';

export default function Spinner({ size = 60, color = colors.enphasis }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

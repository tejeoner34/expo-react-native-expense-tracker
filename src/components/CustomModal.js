import { useState } from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView } from 'react-native';
import { colors } from '../constants/colors';

export default function CustomModal({ children, visible = false, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Add expense</Text>
        </View>
        {children}
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
});

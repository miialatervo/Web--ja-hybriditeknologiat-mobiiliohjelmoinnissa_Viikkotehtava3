// screens/SecondScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SecondScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SecondScreen;

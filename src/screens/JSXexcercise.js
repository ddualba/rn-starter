import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const jsxExcercise = () => {
  const myName = 'Dar';

  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native</Text>
      <Text style={styles.subHeaderStyle}>My name is {myName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default jsxExcercise;

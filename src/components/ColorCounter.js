import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({ colorTitle, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{colorTitle}</Text>
      <Button title={`Increase ${colorTitle}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${colorTitle}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;

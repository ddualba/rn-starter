import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);

  const setColor = (color, change) => {
    // color === 'red, 'green' or 'blue
    // change === +10, -10

    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        colorTitle='Red'
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        colorTitle='Green'
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        colorTitle='Blue'
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;

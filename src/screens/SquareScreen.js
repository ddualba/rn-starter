import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const reducer = (state, {type, payload}) => {
// state === { red: number, green: number, blue: number }
// action === { type: 'change_red' || 'change_green' || 'change_blue, payload: 15 || -15 }

switch (type){
  case 'change_red':
    return state.red + payload > 255 || state.red + payload < 0 
    ? state 
    : { ...state, red: state.red + payload}
  case 'change_green':
    return state.green + payload > 255 || state.green + payload < 0 
    ? state 
    : { ...state, green: state.green + payload}
  case 'change_blue':
    return state.blue + payload > 255 || state.blue + payload < 0 
    ? state 
    : { ...state, blue: state.blue + payload}
  default:
    return state
}
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  const { red, green, blue} = state;

        // red + change > 255 || red + change < 0 ? null : setRed(red + change);
        

  return (
    <View>
      <ColorCounter
        colorTitle='Red'
        onIncrease={() => 
        dispatch({ type: 'change_red', payload: COLOR_INCREMENT})
        }
        onDecrease={() => 
          dispatch({ type: 'change_red', payload: -1* COLOR_INCREMENT})
        }
      />
      <ColorCounter
        colorTitle='Green'
        onIncrease={() => 
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT})
          }
          onDecrease={() => 
            dispatch({ type: 'change_green', payload: -1* COLOR_INCREMENT})
          }
      />
      <ColorCounter
        colorTitle='Blue'
        onIncrease={() => 
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})
          }
          onDecrease={() => 
            dispatch({ type: 'change_blue', payload: -1* COLOR_INCREMENT})
          }
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

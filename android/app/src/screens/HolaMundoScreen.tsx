import React from 'react';
import {Text, View} from 'react-native';

const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 55,
          textAlign: 'center',
          color: 'white',
        }}>
        Hola Mundo laura
      </Text>
    </View>
  );
};

export default HolaMundoScreen;

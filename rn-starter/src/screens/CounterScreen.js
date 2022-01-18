import React, { useState } from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (amount, decrease = false) => {
    if (decrease) {
      setCounter((prevState) => prevState - amount);
    } else {
      setCounter((prevState) => prevState + amount);
    }
  };

  return (
    <View style={styles.container}>
      <Button title='Increase' onPress={() => handleCounter(1)} />
      <Button title='Decrease' onPress={() => handleCounter(1, true)} />
      <Text style={styles.counter}>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  counter: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CounterScreen;

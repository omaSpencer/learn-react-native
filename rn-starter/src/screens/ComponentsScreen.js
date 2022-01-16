import React, { memo } from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Dr. Spencer Phd Max Plus ++';

  return (
    <>
      <Text style={styles.title}>Getting started with react native!</Text>
      <Text style={styles.text}>My name is {name}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  text: {
    fontSize: 20,
  },
});

export default memo(ComponentsScreen);

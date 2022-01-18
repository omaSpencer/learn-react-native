import React from 'react';
import { Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title='Go to Components demo'
        onPress={() => navigate('Components')}
      />
      <Button title='Go to List demo' onPress={() => navigate('List')} />
      <Button title='Go to Image demo' onPress={() => navigate('Image')} />
      <Button title='Go to Counter demo' onPress={() => navigate('Counter')} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

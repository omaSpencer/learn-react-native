import React, { useState } from 'react';
import { Text, StyleSheet, Button, View, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const COLUMNS = 3;

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  const handleAddRandomColor = () => {
    const newColor = getRandomColor();
    setColors([...colors, newColor]);
  };

  return (
    <View style={styles.container}>
      <Button title='Add a Color' onPress={() => handleAddRandomColor()} />
      {!!colors && (
        <FlatList
          numColumns={COLUMNS}
          keyExtractor={(item) => item}
          data={colors}
          renderItem={({ item }) => (
            <View
              style={{
                flexBasis: `${100 / COLUMNS}%`,
                paddingTop: `${100 / COLUMNS}%`,
                backgroundColor: item,
              }}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default ColorScreen;

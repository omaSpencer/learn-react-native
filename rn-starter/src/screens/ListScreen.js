import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const list = [
    {
      title: 'Todo #1',
      deadLine: new Date(),
    },
    {
      title: 'Todo #2',
      deadLine: new Date(),
    },
    {
      title: 'Todo #3',
      deadLine: new Date(),
    },
    {
      title: 'Todo #4',
      deadLine: new Date(),
    },
    {
      title: 'Todo #5',
      deadLine: new Date(),
    },
    {
      title: 'Todo #6',
      deadLine: new Date(),
    },
    {
      title: 'Todo #7',
      deadLine: new Date(),
    },
    {
      title: 'Todo #8',
      deadLine: new Date(),
    },
    {
      title: 'Todo #9',
      deadLine: new Date(),
    },
  ];

  return (
    <FlatList
      keyExtractor={(element) => element.id}
      data={list}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.title} - {item.deadLine.toLocaleDateString()}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;

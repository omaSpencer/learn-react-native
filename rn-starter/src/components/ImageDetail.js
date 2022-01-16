import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View style={styles.flex}>
      <Image source={imageSource} />
      <View style={styles.gap}>
        <Text style={styles.title}>{title}</Text>
        <Text>{`Score: ${score}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 15,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gap: {
    marginHorizontal: 20,
  },
});

export default memo(ImageDetail);

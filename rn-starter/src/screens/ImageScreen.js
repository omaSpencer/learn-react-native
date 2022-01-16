import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View style={styles.flex}>
      <ImageDetail
        title='Forest'
        score={9}
        imageSource={require('../../assets/forest.jpg')}
      />
      <ImageDetail
        title='Beach'
        score={7}
        imageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title='Mountain'
        score={6}
        imageSource={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(ImageScreen);

import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageSlide = ({ source }) => {
  return <Image style={styles.image} source={source} />;
};

const styles = StyleSheet.create({
  image: {
    height: 500,
    width: 420,
    resizeMode: 'cover',
  },
});

export default ImageSlide;


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Content = ({ title, subtitle, highlightedText, buttonAction, skipAction }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitleContainer}>
      {subtitle.map((text, index) => (
          <Text
            key={index}
            style={index === highlightedText ? styles.highlighted : styles.subtitle}
          >
            {text}
          </Text>
        ))}
      </View>
      <Image
          style={styles.slidebar}
          source={require('../../assets/Sliedbar.png')}
        />
      <TouchableOpacity style={styles.skip} onPress={skipAction}>
        <Text>skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingStart: 50,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    color: '#657BC7',
  },
  subtitleContainer: {
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: '500',
  },
  highlighted: {
    color: '#657BC7',
  },
  skip: {
    
    marginVertical:50,
    marginBottom:80,
  },
});

export default Content;


import React from 'react';
import { TouchableOpacity, StyleSheet,Text } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const ArrowButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AntDesign style={styles.icon} name="arrowright" /> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#756EF3',
    width: 180,
    height: 220,
    marginLeft: 360,
    marginBottom: 10,
    borderRadius: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    color: '#fff',
    paddingBottom:100,
    paddingEnd:40,
  },
});

export default ArrowButton;

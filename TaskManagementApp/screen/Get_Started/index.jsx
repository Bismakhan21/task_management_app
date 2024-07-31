import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();

  const go_to_slider1 = () => {
    navigation.navigate('Slider1');
  };

  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/getstarted.jpg')}
        />
      </View>
      <View style={styles.container}>
      <Image
          style={styles.slidebar}
          source={require('../../assets/Sliedbar.png')}
        />
        <Text style={styles.heading1}>Taskcy</Text>

        <View>
          <Text style={styles.heading2}>Building Better</Text>
          <Text style={styles.heading3}>Work Places</Text>
        </View>
        <Text style={styles.Text}>
          {' '}
          create a unique emotional story that describe better than words
        </Text>
        <View>
          <TouchableOpacity style={styles.button} onPress={go_to_slider1}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 480,
    resizeMode: 'cover',
    top:0,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    Width: 375,
    Height: 433,
    Top: 379,
    Radius: 30,
    color:'#fff',
  },
  slidebar:{
    width:'15%',
    resizeMode:'cover',

    borderWidth:1,
marginBottom:10,
  },

  heading1: {
    color: '#756EF3',
    fontFamily: 'Poller One',
    fontSize: 46,
    fontWeight: '900',
    lineHeight: 48,
    textAlign: 'center',
  },
  heading2: {
    color: '#2F394B',
    fontSize: 35,
    fontWeight: '700',
    marginTop: 10,
  },
  heading3: {
    textAlign: 'center',
    color: '#2F394B',
    fontSize: 35,
    fontWeight: '700',
  },
  Text: {
    color: '#8D8D8D',
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7065EB',
    width: 300,
    height: 60,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 16,
    fontSize: 18,
  },
});

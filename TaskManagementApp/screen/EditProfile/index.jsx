import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditProfile = () => {
  const [name, setName] = useState('Alvart Ainstain');
  const [email, setEmail] = useState('albatr.ainstain@gmail.com');
  const [username, setUsername] = useState('@albart.ainstain');
  const [number, setNumber] = useState('+010 2120 112312');

  const navigation =useNavigation();

  const go_Back =()=>{
    navigation.navigate('SettingScreen')
  }

  const go_to_Language =() =>{
    navigation.navigate('Language')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={go_Back}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Edit Profile</Text>
        <TouchableOpacity style={styles.saveButton} onPress={go_to_Language}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg' }} 
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <Icon name="camera" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.inputLabel}>Number</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          keyboardType="phone-pad"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 90,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical:20,
   
  },
  saveButton: {
    marginLeft: 'auto',
  },
  saveText: {
    fontSize: 18,
    color: 'blue',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
    borderWidth:1,
    width: 150,
    height: 150,
    borderRadius: 80,
    marginHorizontal:120,
  },
  profileImage: {
    resizeMode:'cover',
    width:150,
    height:150,
    borderRadius:80,
    
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 5,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginVertical:30,
    marginHorizontal:10,
  },
  inputLabel: {
    fontSize: 16,
   marginVertical:15,
    color: '#888',
  },
 
  input: {
    height: 60,
    width: 340,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#003285',
    color: '#003285',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default EditProfile;

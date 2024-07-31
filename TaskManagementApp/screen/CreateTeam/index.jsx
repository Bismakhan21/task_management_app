import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';

const CreateTeam = () => {
  
  const navigation = useNavigation();

  const go_Back =()=>{
    navigation.navigate("Add_Task")
  }

  const go_to_next =()=>{
    navigation.navigate("Chat")
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={go_Back}>
        <Icon name="arrow-back" type="material" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Team</Text>  
      </View>
      
      <View style={styles.logoContainer}>
        <View style={styles.upload}></View>
        <Text style={styles.uploadText}>Upload logo file</Text>
        <Text style={styles.logoSubText}>Your logo will publish always</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Team Name</Text>
        <TextInput style={styles.textInput} placeholder="Team Align" />
      </View>
      
      <View style={styles.teamMembersContainer}>
        <Text style={styles.label}>Team Member</Text>
        <View style={styles.members}>
          <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }} />
          <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} />
          <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }} />
          <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/men/4.jpg' }} />
          <Avatar rounded icon={{ name: 'plus', type: 'font-awesome' }} containerStyle={styles.addMember} />
        </View>
      </View>
      
      <View style={styles.typeContainer}>
        <Text style={styles.label}>Type</Text>
        <View style={styles.typeButtons}>
          <Button title="Private" buttonStyle={styles.activeTypeButton} titleStyle={styles.activeTypeText} />
          <Button title="Public" type="outline" buttonStyle={styles.inactiveTypeButton} titleStyle={styles.inactiveTypeText} />
          <Button title="Secret" type="outline" buttonStyle={styles.inactiveTypeButton} titleStyle={styles.inactiveTypeText} />
        </View>
      </View>
      

      <TouchableOpacity style={styles.saveButton} onPress={go_to_next}>
        <Text style={styles.saveButtonText}>CreateTeam</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddindTop:60
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop:10,
    marginLeft:80
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    
  },
  upload:{
    width:150,
    height:150,
    borderRadius:120,
   borderWidth:2,
    borderColor:'lightblue'
  },
  uploadText: {
    fontSize: 22,
    marginTop: 10,
    color:'darkblue',
  },
  logoSubText: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    marginBottom:20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    
    marginBottom: 25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },
  teamMembersContainer: {
    marginBottom: 20,
  },
  members: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  addMember: {
    backgroundColor: '#eee',
    marginLeft: 5,
  },
  typeContainer: {
    marginBottom: 20,
  },
  typeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    
  },
  activeTypeButton: {
    backgroundColor:'transparent',
    borderWidth:2,
    borderRadius:8,
    paddingHorizontal: 20,
    
  },
  activeTypeText: {
    color: 'darkblue',
  },
  inactiveTypeButton: {
    borderColor: '#6c63ff',
    paddingHorizontal: 20,
  },
  inactiveTypeText: {
    color: '#6c63ff',
  },

  saveButton: {
    backgroundColor: '#7065EB',
    padding: 15,
    borderRadius: 18,
    width:300,
    margin:'auto',
    marginVertical:20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateTeam;

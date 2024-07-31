import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Icon, Avatar, ButtonGroup } from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';

const Add_Task = () => {
  const [taskName, setTaskName] = useState('');
  // const [selectedMembers, setSelectedMembers] = useState([]);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(1);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const navigation = useNavigation();

  const go_Back =()=>{
    navigation.navigate("Project")
  }

  const go_to_Create =()=>{
    navigation.navigate("CreateTeam")
  }

  const teamMembers = ['abc', 'mehrin', 'bilal', 'Jafor'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity>
        <Icon name="arrow-left" type="feather" size={24} onPress={go_Back}/>
        </TouchableOpacity>
        <Text style={styles.title}>Add Task</Text>
        
      </View>

      <Text style={styles.label}>Task Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Application design"
        value={taskName}
        onChangeText={setTaskName}
      />

      <Text style={styles.label}>Team Member</Text>
      <View style={styles.membersContainer}>
        {teamMembers.map((member, index) => (
          <TouchableOpacity
            key={index}
            style={styles.member}
          >
            <Avatar
            rounded 
            source={require('../../assets/slide01.jpg')}
            />
            <Text style={styles.memberName}>{member}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addMember}>
          <Icon name="plus" type="feather" size={24} color="#4F46E5" />
        </TouchableOpacity>
      </View>
        <View style={styles.container2}>
      <Text style={styles.label}>Date </Text>
      <TouchableOpacity  onPress={() => setOpen(true)}>
        <Text style={styles.btn}>November 01,2021</Text>
      <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </TouchableOpacity>
      
      </View>

     <View style={styles.time} >
      <View style={styles.container3}>
      <Text style={styles.label}>Start Time</Text>
      <TouchableOpacity  onPress={() => setOpen(true)}>
        <Text style={styles.btn}>9:30 am</Text>
      <DatePicker
        modal
        open={open}
        date={startTime}
        mode='time'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </TouchableOpacity>
  </View>

      <View style={styles.container3}>
      <Text style={styles.label}>End Time</Text>
      <TouchableOpacity  onPress={() => setOpen(true)}>
        <Text style={styles.btn}>3:30 pm</Text>
      <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </TouchableOpacity>
      
      </View>
      </View>
      <Text style={styles.label}>Board</Text>
      <ButtonGroup
        onPress={setSelectedBoardIndex}
        selectedIndex={selectedBoardIndex}
        buttons={['Urgent', 'Running', 'Ongoing']}
        containerStyle={styles.buttonGroup}
        selectedButtonStyle={styles.selectedButton}
        textStyle={styles.buttonText}
      />

      <TouchableOpacity style={styles.saveButton} onPress={go_to_Create}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9FAFB',
  },

  container2:{
    flexDirection:'coloum',
    marginBottom:40,   
  },

 time:{
  flexDirection:'row'
 },

  container3:{
    flexDirection:'coloum',
    marginBottom:40,   
  },
 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 36,
    paddingTop:40
  },
  title: {
    fontSize: 20,
    marginLeft:120,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 10,
    marginBottom:30,
    backgroundColor: '#FFF',
  },
  membersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent:'space-around',
  },
  member: {
    alignItems: 'center',
   
  },
  selectedMember: {
    borderColor: '#4F46E5',
    borderWidth: 2,
    borderRadius: 50,
  },
  memberName: {
    fontSize: 12,
    color: '#000',
  },
  addMember: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E5E7EB',
  },
  
  buttonGroup: {
    marginBottom: 20,
    marginVertical:20,
    borderRadius:12,
    height:50,
   
  },
  selectedButton: {
    backgroundColor: '#7065EB',
  
  },
  buttonText: {
    color: '#000',
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
  btn:{
   width:300,
   paddingTop:20,
  }
});

export default Add_Task;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';


const chatData = [
  { id: '1', name: 'Jenny Alxinder', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', status: 'Active now' },
  { id: '2', name: 'Team Align', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', status: 'Active 1h ago' },
  { id: '3', name: 'Alex Avishek', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', status: 'Active 1h ago' },
  { id: '4', name: 'Jafor Dicrose', avatar: 'https://randomuser.me/api/portraits/men/4.jpg', status: 'Active 1h ago' },
];

const Chat = () => {

  const navigation = useNavigation();

  const go_Back =()=>{
    navigation.navigate("CreateTeam")
  }

  const go_to_next =()=>{
    navigation.navigate("TaskStatus")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={go_Back}>
          <Icon name="arrow-left" type="font-awesome" size={24}  />
        </TouchableOpacity>
        <Text style={styles.title}>Chat</Text>
        <TouchableOpacity>
          <Icon name="plus" type="font-awesome" size={24}  />
        </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        
      />
      
      <FlatList
        data={chatData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <Avatar
              rounded
              source={{ uri: item.avatar }}
              size="medium"
            />
            <View style={styles.chatDetails}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatStatus}>{item.status}</Text>
            </View>
            <TouchableOpacity>
              <Icon name="camera" type="font-awesome" size={24} color="#7065EB" />
            </TouchableOpacity>

          </View>
          
        )}
      />
            <View><TouchableOpacity onPress={go_to_next}><Text>next</Text></TouchableOpacity></View>

      
      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Icon name="home" type="font-awesome" size={24} color="" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="folder" type="font-awesome" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" type="font-awesome" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="comments" type="font-awesome" size={24} color="#7065EB" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" type="font-awesome" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical:10,
    margin: 30,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  chatDetails: {
    flex: 1,
    marginLeft: 10,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatStatus: {
    color: '#888',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#7065EB',
    justifyContent: 'center',
    alignItems: 'start',
    
  },
});

export default Chat;

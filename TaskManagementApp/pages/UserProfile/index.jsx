import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const UserProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
          <Icon name="arrow-back" size={30} color="#000" />
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/4.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Alvart Ainstain</Text>
        <Text style={styles.profileUsername}>@albart.ainstain</Text>
        <Button
          title="Edit"
          buttonStyle={styles.editButton}
          titleStyle={styles.editButtonText}
        />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Icon name="clock" type="feather" size={30} color="#6c63ff" />
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>On Going</Text>
        </View>
        <View style={styles.stat}>
          <Icon name="check-circle" type="feather" size={30} color="#6c63ff" />
          <Text style={styles.statNumber}>25</Text>
          <Text style={styles.statLabel}>Total Complete</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>My Projects</Text>
          <Icon name="chevron-right" size={30} color="#7065EB" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Join a Team</Text>
          <Icon name="chevron-right" size={30} color="#7065EB" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Settings</Text>
          <Icon name="chevron-right" size={30} color="#7065EB" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>My Task</Text>
          <Icon name="chevron-right" size={30} color="#7065EB" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <Icon name="home" type="feather" size={25} color="#7065EB" />
        <Icon name="file-text" type="feather" size={25} color="#7065EB" />
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" type="feather" size={30} color="#fff" />
        </TouchableOpacity>
        <Icon name="message-circle" type="feather" size={25} color="#7065EB" />
        <TouchableOpacity>
          <Icon name="user" type="font-awesome" size={25} color="c" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileUsername: {
    fontSize: 14,
    color: '#888',
  },
  editButton: {
    marginTop: 10,
    borderColor: '#6c63ff',
    backgroundColor:'transparent',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  editButtonText: {
    color: 'blue',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  menuContainer: {
    marginVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight:'500',
    color:'#7065EB',
    marginLeft:30,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addButton: {
    backgroundColor: '#6c63ff',
    borderRadius: 50,
    padding: 10,
  },
});

export default UserProfile;

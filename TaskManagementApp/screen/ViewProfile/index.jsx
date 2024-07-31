import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ViewProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Alvart Ainstain</Text>
        <Text style={styles.username}>@albart.ainstain</Text>
        <Button
          title="View Profile"
          buttonStyle={styles.viewProfileButton}
          titleStyle={styles.viewProfileButtonText}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Workspace</Text>
        <View style={styles.workspace}>
          <Text style={styles.workspaceText}>UI Design</Text>
          <Button
            title="Invite"
            type="outline"
            buttonStyle={styles.inviteButton}
            titleStyle={styles.inviteButtonText}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Manage</Text>
        <View style={styles.manageContainer}>
          <View style={styles.manageItem}>
            <Text style={styles.manageCount}>8</Text>
            <Text style={styles.manageLabel}>Team</Text>
          </View>
          <View style={styles.manageItem}>
            <Text style={styles.manageCount}>13</Text>
            <Text style={styles.manageLabel}>Labels</Text>
          </View>
          <View style={styles.manageItem}>
            <Text style={styles.manageCount}>8</Text>
            <Text style={styles.manageLabel}>Task</Text>
          </View>
          <View style={styles.manageItem}>
            <Text style={styles.manageCount}>13</Text>
            <Text style={styles.manageLabel}>Member</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  closeButton: {
    position: 'absolute',
    top: 2,
    left: 16,
    zIndex: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 16,
    marginTop:20,
    
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 14,
  },
  viewProfileButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderWidth:1,
    
  },
  viewProfileButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1C1C1C',
  },
  workspace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  workspaceText: {
    fontSize: 16,
    color: '#1C1C1C',
  },
  inviteButton: {
  
    borderColor:'blue',
    borderWidth:1,
    borderRadius: 8,
  },
  inviteButtonText: {
    fontSize:14,
    color: '#7065EB',
  },
  manageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  manageItem: {
    width: '48%',
    padding: 16,
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderWidth:1,
    borderColor:'lightgrey',
    marginBottom: 16,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  manageCount: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7065EB',
    borderRadius: 8,
    borderWidth:1,
    borderColor:'lightgrey',
    paddingHorizontal:12,
    paddingVertical:5,
  },
  manageLabel: {
    fontSize: 16,
    color: '#7065EB',
    fontWeight: '500',
  },
  button: {
    margin:'auto',
    marginVertical:10,
    backgroundColor: '#7065EB',
    width: 360,
    height: 60,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 16,
    fontSize: 20,
  },
});

export default ViewProfile;
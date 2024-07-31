import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Icon } from 'react-native-elements';

const Search = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <View style={styles.searchContainer}>
       
        <Icon name="search" size={25} color="#6c63ff" />
        <TextInput
          style={styles.searchInput}
          placeholder="Dashboard"
        />
        
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>File</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskContainer}>
        <View style={styles.taskCard}>
          <View style={styles.taskHeader}>
            <Text style={styles.taskTitle}>Dashboard Unity</Text>
            {/* <Text style={styles.taskProgress}>10/20</Text> */}
          </View>
          <Text style={styles.taskSubtitle}>Design</Text>
          {/* <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '50%' }]} />
          </View> */}
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg' }}
              style={styles.avatar}
            />
            <Image
              source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg' }}
              style={styles.avatar}
            />
            <Text style={styles.taskProgress}>10/20</Text>
          </View>
            <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '50%' }]} />
            
          </View>
        </View>

        <View style={styles.taskCard}>
          <View style={styles.taskHeader}>
            <Text style={styles.taskTitle}>Dashboard Instagram</Text>
          </View>
          <Text style={styles.taskSubtitle}>Marketing</Text>
          
          <View style={styles.avatarContainer}>
            <Image
             source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg' }}
             style={styles.avatar}
           />
           <Image
             source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg' }}
              style={styles.avatar}
            />
            <Text style={styles.taskProgress}>10/20</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '50%', backgroundColor: '#f5a623' }]} />
          </View>
        </View>
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
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6c63ff',
    borderRadius: 10,
    margin: 20,
    paddingHorizontal: 10,
    paddingVertical:5,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginVertical: 10,
    marginLeft:20,
    
},
tabButton: {
    padding: 10,
    paddingHorizontal: 20,
    marginRight:15,
    borderWidth:1,
    backgroundColor:'transparent',
    borderRadius:10,
    borderColor:'lightblue',

  },

  tabText: {
    fontSize: 16,
  },
  activeTab: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor:'blue',

  },
  activeTabText: {
    color: '#6c63ff',
  },
  taskContainer: {
    margin: 20,
  },
  taskCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskProgress: {
    marginLeft:170,
    fontSize: 14,
    color: 'blue',
  },
  taskSubtitle: {
    fontSize: 14,
    // color: '#888',
    marginVertical: 5,
  },
  progressBarContainer: {
    flexDirection:'row',
    height: 5,
    backgroundColor: '#e5e5e5',
    borderRadius: 5,
    marginVertical: 10,
    width:'90%',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'lightgreen',
  },
  avatarContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
});

export default Search;

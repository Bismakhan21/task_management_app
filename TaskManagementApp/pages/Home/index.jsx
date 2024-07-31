import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


const Home = () => {

  const navigation = useNavigation();

  const go_to_Today_task =() =>{
    navigation.navigate('TodayTask')
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="grid" type="feather" size={24}  />
        <Text style={styles.date}>Friday, 26</Text>
        <Icon name="bell" type="feather" size={24} />
      </View>
      <Text style={styles.title}>Let's make a habits together 🙌</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Application Design</Text>
          <Text style={styles.cardSubtitle}>UI Design Kit</Text>
          <View style={styles.cardProgress}>
            <Image
              source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg' }}
              style={styles.avatar}
            />
            <Image
              source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg' }}
              style={styles.avatar}
            />
            <Image
              source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg' }}
              style={styles.avatar}
            />
            <View style={styles.progress}>
            <Text style={styles.text}>Progress</Text>
            <View style={styles.View}></View>
            </View>
            <Text style={styles.progressText}>50/80</Text>
          </View>
        </View>
      
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>In Progress</Text>
        <Icon name="chevron-right" type="feather" size={24} />
      </View>
      <ScrollView>
      <View style={styles.task}>
        <Text style={styles.taskTitle}>Create Detail Booking</Text>
        <Text style={styles.taskSubtitle}>Productivity Mobile App</Text>
        <View progress={0.6} color="#3B82F6" style={styles.taskProgress}></View>
      
        <Text style={styles.taskTime}>2 min ago</Text>
      </View>
      <View style={styles.task}>
        <Text style={styles.taskTitle}>Revision Home Page</Text>
        <Text style={styles.taskSubtitle}>Banking Mobile App</Text>
        <View progress={0.7} color="#3B82F6" style={styles.taskProgress}></View>
        <Text style={styles.taskTime}>5 min ago</Text>
      </View>
      <View style={styles.task}>
        <Text style={styles.taskTitle}>Working On Landing Page</Text>
        <Text style={styles.taskSubtitle}>Online Course</Text>
        <View progress={0.8} color="#3B82F6" style={styles.taskProgress}></View>
        <Text style={styles.taskTime}>7 min ago</Text>
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={go_to_Today_task}>
      <Text style={styles.nextButtonText}>go_to_ProjectList</Text>
      </TouchableOpacity>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
    
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop:28,
  },
  icon:{
    border:'1px solid black',
    width:'20px',
    height:'40px',
  },

  date: {
    fontSize: 16,
    color: '#6B7280',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  cardContainer: {
    marginBottom: 16,
    display:'flex',
    flexDirection:'row',  
  },
  card: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    padding: 16,
    width:300,
    height:150,
    paddingTop:20,
  },
  cardTitle: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#DBEAFE',
    marginBottom: 8,
  },
  cardProgress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    
  },
  progress:{
    marginLeft:20,
  },

  View: {
    flex: 1,
    height: 1,
    width:92,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  text:{
   paddingBottom:'20px',
    color:'#fff',
    fontSize:12,
  },

  progressText: {
    fontSize: 14,
    color: '#FFF',
    marginLeft: 24,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  task: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  taskProgress: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#93C5FD',
    marginBottom: 4,
  },
  taskTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  nextButton: {
    backgroundColor: '#3B82F6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;

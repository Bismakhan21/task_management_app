
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


const TodayTask = () => {

    const navigation = useNavigation();

  const go_to_MonthlyTask = () => {
    navigation.navigate('CalenderScreen');
  };

  const go_to_ProjectList =()=>{
    navigation.navigate('Home');
  }
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" type="feather" size={24} onPress={go_to_ProjectList} />
        <Text style={styles.headerTitle}>Today Task</Text>
        <Icon name="edit" type="feather" size={24} />
      </View>
      <Text style={styles.date}>October, 20 📝

      </Text>
      <Text style={styles.subtitle}>15 task today</Text>
      <ScrollView horizontal style={styles.dateContainer}>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>19</Text>
          <Text style={styles.dayText}>Sat</Text>
        </View>
        <View style={[styles.dateBox, styles.selectedDateBox]}>
          <Text style={[styles.dateText, styles.selectedDateText]}>20</Text>
          <Text style={[styles.dayText, styles.selectedDayText]}>Sun</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>21</Text>
          <Text style={styles.dayText}>Mon</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>22</Text>
          <Text style={styles.dayText}>Tue</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>23</Text>
          <Text style={styles.dayText}>Wed</Text>
        </View>
      </ScrollView>
      <View style={styles.taskBox}>
        <Text style={styles.taskTime}>10 am</Text>
        <View style={[styles.taskCard, styles.blueTask]}>
          <Text style={styles.taskCardTitle}>Wireframe elements 😌</Text>
          <View style={styles.taskCardAvatars}>
            <Image
              source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg' }}
              style={styles.avatar}
            />
            <Image
              source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg' }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.taskCardTime}>10am - 11am</Text>
        </View>
      </View>
      <View style={styles.taskBox}>
        <Text style={styles.taskTime}>12 pm</Text>
        <View style={[styles.taskCard, styles.greenTask]}>
          <Text style={styles.taskCardTitle}>Mobile app Design 😍</Text>
          <View style={styles.taskCardAvatars}>
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
          </View>
          <Text style={styles.taskCardTime}>11:40am - 12:40pm</Text>
        </View>
      </View>
      <View style={styles.taskBox}>
        <Text style={styles.taskTime}>01 pm</Text>
        <View style={[styles.taskCard, styles.orangeTask]}>
          <Text style={styles.taskCardTitle}>Design Team call 😌</Text>
          <View style={styles.taskCardAvatars}>
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
            <Text style={styles.moreAvatars}>+5</Text>
          </View>
          <Text style={styles.taskCardTime}>01:20pm - 02:20pm</Text>
        </View>
        <TouchableOpacity onPress={go_to_MonthlyTask}>
          <Text>go to next</Text>
        </TouchableOpacity>
      </View>
        {/* <Bottom_tab_Navigation /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
    paddingTop:45
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    color:'#003285',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    marginBottom: 16,
     
    
  },
  dateBox: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#F3F4F6',
    width:65,
    height:90,
  },
  selectedDateBox: {
    backgroundColor: '#3B82F6',
  },
  dateText: {
    fontSize: 24,
    paddingTop:10,
  },
  selectedDateText: {
    color: '#FFF',
  },
  dayText: {
    fontSize: 12,
    color: '#6B7280',
  },
  selectedDayText: {
    color: '#FFF',
  },
  taskBox: {
    marginBottom: 26,
  },
  taskCard: {
    
    borderRadius: 8,
    padding: 16,
    width:320,
    height:120,
    marginLeft:80,
  },
  blueTask: {
    backgroundColor: '#BFDBFE',
  },
  greenTask: {
    backgroundColor: '#D1FAE5',
  },
  orangeTask: {
    backgroundColor: '#FED7AA',
  },
  taskCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  taskCardAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  taskCardTime: {
    fontSize: 14,
    color: '#6B7280',
  },
  moreAvatars: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
  taskTime:{
    color:'#003285',
  }
});

export default TodayTask;

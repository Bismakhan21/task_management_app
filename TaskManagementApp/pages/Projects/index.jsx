import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import FontAwesome5 from'react-native-vector-icons/FontAwesome5'

const Project = () => {
const navigation = useNavigation();

const go_Back =() =>{
  navigation.navigate('CalenderScreen')
}

const go_to_AddTask =() =>{
  navigation.navigate('Add_Task')
}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" type="feather" size={24} onPress={go_Back} />
        <Text style={styles.title}>Projects</Text>
        <Icon name="plus" type="feather" size={24} />
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" type="feather" size={20} color="#9CA3AF" />
        <Text style={styles.searchText}>Search</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
        <Text style={[styles.tab, styles.activeTab]}>Favourites</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>Recents</Text>
        <Text style={styles.tab}>All</Text>
        <Icon name="grid" type="feather" size={24}  />
      </View>
      <View style={styles.projectContainer}>
        <ProjectCard
          style={styles.ProjectCard}
          title= {`Unity Dashboard 😄`}
          progress={0.5}
          members={['https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg', 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg']}
          taskProgress="10/20"
        />
        <ProjectCard
          title="Instagram Shots 📝"
          category="Marketing"
          progress={0.5}
          members={['https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg', 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg']}
          taskProgress="10/20"
        />
        <ProjectCard
          title="Cubbles 😄"
          category="Design"
          progress={0.25}
          members={['https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg', 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg']}
          taskProgress="10/20"
        />
        <ProjectCard
          title="Ui8 Platform 😄"
          category="Design"
          progress={0.5}
          members={['https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg', 'https://www.shutterstock.com/shutterstock/photos/2174725871/display_1500/stock-photo-handsome-hispanic-millennial-man-sit-on-sofa-at-home-look-at-camera-make-video-call-remote-talk-2174725871.jpg']}
          taskProgress="10/20"
        />

        <TouchableOpacity onPress={go_to_AddTask}>
          <Text>
            go to next
          </Text>
        </TouchableOpacity>
      </View>

      

    </ScrollView>
  );
};

const ProjectCard = ({ title, category, progress, members, taskProgress }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardCategory}>{category}</Text>
    <View style={styles.progressContainer}>
      {members.map((member, index) => (
        <Image key={index} source={{ uri: member }} style={styles.avatar} />
      ))}
      <View progress={progress} color='#003285' style={styles.View} >
        <View style={styles.View2}></View>
      </View>
      <Text style={styles.progressText}>{taskProgress}</Text>
    </View>



  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
    paddingTop:50
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 15,
    marginBottom: 26,
  },
  searchText: {
    marginLeft: 8,
    color: '#9CA3AF',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    fontSize: 16,
    color: '#9CA3AF',
    
  },
  activeTab: {
    color: '#3B82F6',
    fontWeight: 'bold',
  },
  projectContainer: {
    marginBottom: 16,
  },
  ProjectCard:{
    color:'#003285',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardCategory: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  View: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginRight: 8,
  },
  View2:{
    flex: 1,
    height: 8,
    width:95,
    borderRadius: 4,
    backgroundColor: '#FED7AA',
  },
  progressText: {
    fontSize: 14,
    color: '#6B7280',
  },
});



  export default Project;
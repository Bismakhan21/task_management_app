import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {Circle} from 'react-native-svg';
import {ProgressCircle} from 'react-native-svg-charts';

const TaskStatus = () => {
  const navigation = useNavigation();

  const go_Back =()=>{
    navigation.navigate("Chat")
  }

  const go_to_next =()=>{
    navigation.navigate("UserProfile")
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={go_Back}>
          <Icon name="arrow-left" type="font-awesome" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Task Status</Text>
        <TouchableOpacity>
          <Icon name="filter" type="font-awesome" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.chartContainer}>
        <ProgressCircle
          style={{height: 300}}
          progress={0.65}
          progressColor={'rgb(134, 65, 244)'}
          backgroundColor={'#e6e6e6'}
          strokeWidth={10}
          startAngle={-Math.PI * 0.8}
          endAngle={Math.PI * 0.8}>
          <Circle
            cx={100}
            cy={100}
            r={80}
            fill="none"
            stroke="#00cc99"
            strokeWidth={10}
          />
          <Circle
            cx={100}
            cy={100}
            r={80}
            fill="none"
            stroke="#ff9933"
            strokeWidth={10}
          />
        </ProgressCircle>
        <View style={styles.chartText1}>
        <View style={styles.chartText}>
          <Text style={styles.chartPercentage}>65%</Text>
          <Text style={styles.chartLabel}>Complete</Text>
        </View>
      </View>
      </View>

      <View style={styles.legend}>
        <Text style={styles.legendItem}>
          <Circle cx={5} cy={5} r={5} fill="#00cc99" />
          To Do
        </Text>
        <Text style={styles.legendItem}>
          <Circle cx={5} cy={5} r={5} fill="#ff9933" /> In Progress
        </Text>
        <Text style={styles.legendItem}>
          <Circle cx={5} cy={5} r={5} fill="rgb(134, 65, 244)" /> Completed
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Monthly</Text>
      <View style={styles.taskItem}>
        <Text style={styles.taskTitle}>Completed</Text>
       
        <Text style={styles.taskDetails}>18 Task now · 18 Task Completed</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-h" type="font-awesome" size={24} color="#000" />
        </TouchableOpacity>
   
      </View>
      <View style={[styles.taskItem, styles.activetask]}>
        <Text style={styles.taskTitle}>In Progress</Text>
        <Text style={styles.taskDetails}>2 Task now · 1 started</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-h" type="font-awesome" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.taskItem}>
        <Text style={styles.taskTitle}>To Do</Text>
        <Text style={styles.taskDetails}>2 Task now · 1 Upcoming</Text>
        <TouchableOpacity onPress={go_to_next}>
          <Icon name="ellipsis-h" type="font-awesome" size={24} color="#000" />
        </TouchableOpacity>

      </View>

      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Icon name="home" type="font-awesome" size={24} color="#7065EB" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="folder" type="font-awesome" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" type="font-awesome" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="comments" type="font-awesome" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" type="font-awesome" size={24} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
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
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chartContainer: {
    alignItems: 'center',
    marginTop:20,
  },
  chartText: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderWidth:2,
    backgroundColor:'#fff',
    borderRadius:100,
    borderColor:'blue',
    
  },
  chartText1: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    borderWidth:2,
    backgroundColor:'blue',
    borderRadius:100,
    borderColor:'blue',
  },
  
  chartPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  chartLabel: {
    fontSize: 16,
    color: '#888',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between',
    padding: 40,
    // borderBottomWidth: 1,
    // borderBottomColor: '#eee',
  },
 
  activetask: {
    borderWidth: 2,
    width: 380,
    margin: 'auto',
    borderRadius: 20,
    borderColor: 'lightblue',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  taskDetails: {
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
    alignItems: 'center',
  },
});

export default TaskStatus;
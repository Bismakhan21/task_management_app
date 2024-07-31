import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native';
import { Icon } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const CalenderScreen = () => {

  const navigation = useNavigation();

  const go_to_ProjectScreen = () => {
    navigation.navigate('Project');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" type="feather" size={24} />
        <Text style={styles.headerTitle}>Monthly Task</Text>
        <Icon name="more-vertical" type="feather" size={24} />
      </View>
      <Text style={styles.date}>September, 12 📝</Text>
      <Text style={styles.subtitle}>15 task today</Text>
      <ScrollView horizontal style={styles.dateContainer}>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>11</Text>
          <Text style={styles.dayText}>Wed</Text>
        </View>
        <View style={[styles.dateBox, styles.selectedDateBox]}>
          <Text style={[styles.dateText, styles.selectedDateText]}>12</Text>
          <Text style={[styles.dayText, styles.selectedDayText]}>Thu</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>13</Text>
          <Text style={styles.dayText}>Fri</Text>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>14</Text>
          <Text style={styles.dayText}>Sat</Text>
        </View>
      </ScrollView>
      <Calendar
        current={'2024-07-09'}
        markedDates={{
          '2024-07-03': { marked: true },
          '2024-07-09': { marked: true, selected: true },
          '2024-07-27': { marked: true },
        }}
        theme={{
          calendarBackground: '#FFF',
          textSectionTitleColor: '#6B7280',
          selectedDayBackgroundColor: '#3B82F6',
          selectedDayTextColor: '#FFF',
          todayTextColor: '#3B82F6',
          dayTextColor: '#000',
          textDisabledColor: '#D1D5DB',
          monthTextColor: '#000',
          arrowColor: '#3B82F6',
        }}
        style={styles.calendar}
      />
      <TouchableOpacity onPress={go_to_ProjectScreen}>
        <Text>next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    color:'#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dateBox: {
    alignItems: 'center',
    justifyContent:'center',
    padding: 12,
    borderRadius: 20,
    marginHorizontal:12,
    paddingHorizontal:15,
    backgroundColor: '#F3F4F6',
    width:65,
    height:120,
  },
  selectedDateBox: {
    backgroundColor: '#3B82F6',
  },
  dateText: {
    fontSize: 22,
  },
  selectedDateText: {
    color: '#FFF',
  },
  dayText: {
    fontSize: 18,
    color: '#6B7280',
  },
  selectedDayText: {
    color: '#FFF',
  },
  calendar: {
    borderRadius: 10,
    marginTop:60,

  },
});

export default CalenderScreen;
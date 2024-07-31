import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingScreen = () => {
  const [permission, setPermission] = useState(true);
  const [pushNotification, setPushNotification] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navigation = useNavigation();

  const go_to_language =() =>{
    navigation.navigate("LanguageSelection")
  }

  const go_Back =() =>{
    navigation.navigate("Search")
  }

//   const DarkMood =()=>{
//     setDarkMode(true)
//   }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={go_Back}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Settings</Text>
      </View>
      <View style={styles.settingOption}>
        <Text style={styles.optionText}>Permission</Text>
        <Switch
          value={permission}
          onValueChange={setPermission}
          thumbColor={permission ? "blue" : "#999"}
          trackColor={{ false: "#9998", true: "#81b0ff" }}
        />
      </View>
      <View style={styles.settingOption}>
        <Text style={styles.optionText}>Push Notification</Text>
        <Switch
          value={pushNotification}
          onValueChange={setPushNotification}
          thumbColor={pushNotification ? "blue" : "#999"}
          trackColor={{ false: "#9998", true: "#81b0ff" }}
        />
      </View>
      <View style={styles.settingOption}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? "blue" : "#999"}
          trackColor={{ false: "#9998", true: "#81b0ff" }}

        />
      </View>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionText}>Security</Text>
        <Icon name="chevron-forward" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionText}>Help</Text>
        <Icon name="chevron-forward" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption} onPress={go_to_language}>
        <Text style={styles.optionText}>Language</Text>
        <Icon name="chevron-forward" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingOption}>
        <Text style={styles.optionText}>About Application</Text>
        <Icon name="chevron-forward" size={24} color="blue" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 120,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical:20,
   
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingScreen;

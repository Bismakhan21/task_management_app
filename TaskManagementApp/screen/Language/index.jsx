import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'Bangla', 'Spanish', 'French'];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const navigation =useNavigation();

  const go_Back =()=>{
    navigation.navigate('EditProfile')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={go_Back}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Language</Text>
      </View>
      {languages.map((language, index) => (
        <TouchableOpacity
          key={index}
          style={styles.languageOption}
          onPress={() => handleLanguageSelect(language)}
        >
          <Text style={styles.languageText}>{language}</Text>
          {selectedLanguage === language && (
            <Icon name="checkmark-circle" size={30} color="blue" />
          )}
        </TouchableOpacity>
      ))}
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
    marginRight: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical:22,
  },
  languageOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
},
languageText: {
    fontSize: 18,
    color:'blue',
  },
});

export default Language;

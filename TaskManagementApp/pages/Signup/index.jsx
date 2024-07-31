  import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {useNavigation} from '@react-navigation/native';
  import Input from '../../components/login_signup/Input';
import { Icon } from 'react-native-elements';
import axios from 'axios'
  
  const Signup = () => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigation = useNavigation();
  
    const go_to_login = () => {
      navigation.navigate('Login');
    };
  
    
    const handleSignup = async () => {
      try {
        const response = await axios.post(
          CONNECT_DB_SIGNUP,
          {
            username,
            email,
            password,
          },  
        );
        if (response.status === 201) {
          console.log('User created successfully');
          go_to_ProjectList();
        }
      } catch (error) {
        console.error(error || 'An unexpected error occurred');
      }
    };
  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, paddingBottom: 20}} >
        <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButton} >
            <Icon name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.header}>Signup</Text>
        </View>
          <View>
            <View
              style={{
                paddingHorizontal: 80,
                paddingVertical: 40,
                backgroundColor: 'white',
                gap: 20,
              }}>
              <View style={styles.container}>
                <Text style={styles.account}>Creat Account</Text>
  
                <Text style={styles.text}>
                  Please enter your imformation and create your account
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  rowGap: 35,
                  marginTop: 30,
                }}>
                <Input
                  style={styles.input}
                  onChangeText={setUsername}
                  value={username}
                  placeholder="Enter your name"
                  keyboardType="default"
                />
  
                <Input
                  style={styles.input}
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                />
  
                <Input
                  style={styles.input}
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Password"
                  secureTextEntry={true}
                />
  
                <TouchableOpacity
             
                  onPress={handleSignup}
                style={styles.button}
                >
                  <Text
                   style={styles.buttonText}>
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
  
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{width: 45, height: 45}}
                    source={{
                      uri: 'https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png',
                    }}
                  />
                </TouchableOpacity>
  
                <TouchableOpacity>
                  <Image
                    style={{width: 50, height: 40}}
                    source={{
                      uri: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Already have an account </Text>
              <TouchableOpacity onPress={go_to_login}>
                <Text style={{fontWeight: 'bold'}}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default Signup;
  
  const styles = StyleSheet.create({
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      marginVertical: 20,
    },
    backButton: {
      marginRight: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 22,
      marginLeft: 80,
    },
    input: {
      height: 60,
      width: 340,
      borderRadius: 20,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#003285',
      color: '#003285',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    account: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#003285',
      marginLeft: 10,
      marginBottom: 20,
    },
    container: {
      flex: 1,
      textAlign: 'left',
    },
    button: {
      backgroundColor: '#7065EB',
      width: 340,
      height: 60,
      borderRadius: 20,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      paddingTop: 16,
      fontSize: 18,
    },
  });
  
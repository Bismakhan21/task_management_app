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
import Icon from 'react-native-vector-icons/Ionicons';
  import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const go_to_Signup = () => {
    navigation.navigate('Signup');
  };

  const go_to_ProjectList = () => {
    navigation.navigate('Home');
  };

  const go_Back = () => {
    navigation.navigate('Slider3');
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(CONNECT_DB_LOGIN, {email, password});

      const token = response.data.token;
      await AsyncStorage.setItem('userToken', token);
      go_to_ProjectList();

      // if (response.status === 201) {
      //   console.log('User login successfully');
      //   go_to_ProjectList();
      // }
    } catch (error) {
      console.error(error || 'An unexpected error occurred');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, paddingBottom: 20}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButton} onPress={go_Back}>
            <Icon name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.header}>Signin</Text>
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
              <Text style={styles.account}>Welcome Back</Text>

              <Text style={styles.text}>
                Please enter your email address and password for login
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
                onPress={handleLogin}
               
                style={styles.button}>
                <Text
                   style={styles.buttonText}>
                  Signin
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.with}>Signin with</Text>
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
            <Text> Not Register yet ?</Text>
            <TouchableOpacity onPress={go_to_Signup}>
              <Text style={{fontWeight: 'bold'}}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  account: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003285',

    marginBottom: 20,
  },

  container: {
    flex: 1,
    textAlign: 'left',
  },
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
  with: {
    textAlign: 'center',
    fontWeight:'500',
    marginVertical:20,
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

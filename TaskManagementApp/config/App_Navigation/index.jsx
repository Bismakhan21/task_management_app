import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../../screen/Get_Started';
import Slider1 from '../../screen/Slider/Slider1';
import Slider2 from '../../screen/Slider/Slider2';
import Slider3 from '../../screen/Slider/Slider3';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Home from '../../pages/Home';
import TodayTask from '../../pages/Home/TodayTask';
import CalenderScreen from '../../screen/CalenderScreen';
import Project from '../../pages/Projects';
import Add_Task from '../../screen/Add_Task';
import CreateTeam from '../../screen/CreateTeam';
import Chat from '../../pages/Chat';
import TaskStatus from '../../screen/TaskStatus';
import UserProfile from '../../pages/UserProfile';
import ViewProfile from '../../screen/ViewProfile';
import Search from '../../screen/Search';
import SettingScreen from '../../screen/SettingScreen';
import EditProfile from '../../screen/EditProfile';
import Language from '../../screen/Language';
import Bottom_tab_Navigation from '../Bottom_tab_Navigation';


export const App_Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} 
        initialRouteName=''>
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name='Slider1' component={Slider1} />
            <Stack.Screen name='Slider2' component={Slider2} />
            <Stack.Screen name='Slider3' component={Slider3} />
            <Stack.Screen name='Login' component={Login}  />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='TodayTask' component={TodayTask} />
            <Stack.Screen name='CalenderScreen' component={CalenderScreen} />
            <Stack.Screen name='Project' component={Project} />
            <Stack.Screen name='Add_Task' component={Add_Task} />
            <Stack.Screen name='CreateTeam' component={CreateTeam} />
            <Stack.Screen name='Chat' component={Chat} />
            <Stack.Screen name='TaskStatus' component={TaskStatus} />
            <Stack.Screen name='UserProfile' component={UserProfile} />
            <Stack.Screen name='ViewProfile' component={ViewProfile} />
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='SettingScreen' component={SettingScreen} />
            <Stack.Screen name='EditProfile' component={EditProfile} />
            <Stack.Screen name='Language' component={Language} />
            

        </Stack.Navigator>
    </NavigationContainer>
    );
};
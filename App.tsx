import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

const App = () => {

  const windowHeight = Dimensions.get('window').height;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#EADBC8',
            height: windowHeight * 0.13,
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
          },
          tabBarActiveTintColor: '#102C57',
          tabBarInactiveTintColor: '#999',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            fontFamily: 'Gantari-Regular',
            marginBottom: 20,
          },
          tabBarIconStyle: {
            marginTop: 20,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: (({ focused }: any) => (
              <Feather name="home" size={35} color={focused ? '#102C57' : '#999'} />
            ))
          }}
        />
        <Tab.Screen 
          name="Menu" 
          component={MenuScreen}
          options={{
            tabBarIcon: (({ focused }: any) => (
              <MaterialIcons name="restaurant-menu" size={35} color={focused ? '#102C57' : '#999'} />
            ))
          }}
        />
        <Tab.Screen 
          name="Rewards" 
          component={RewardsScreen}
          options={{
            tabBarIcon: (({ focused }: any) => (
              <MaterialCommunityIcons name="ticket-outline" size={35} color={focused ? '#102C57' : '#999'} />
            ))
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarIcon: (({ focused }: any) => (
              <Octicons name="person" size={35} color={focused ? '#102C57' : '#999'} />
            ))
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

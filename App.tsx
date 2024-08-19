import React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import DrawerNavigator from './DrawerNavigator'; // Import your drawer navigator
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Feather name="menu" size={30} color="#102C57" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          tabBarStyle: {
            backgroundColor: '#F8F0E5',
            height: windowHeight * 0.1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          tabBarActiveTintColor: '#102C57',
          tabBarInactiveTintColor: '#999',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Gantari-Regular',
            marginBottom: 16,
          },
          tabBarIconStyle: {
            marginTop: 16,
          },
        })}
      >
        <Tab.Screen 
          name="Home"
          component={DrawerNavigator} // The drawer navigator is wrapped in the home tab
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name="home" size={30} color={focused ? '#102C57' : '#999'} />
            ),
          }}
        />
        <Tab.Screen 
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons name="restaurant-menu" size={30} color={focused ? '#102C57' : '#999'} />
            ),
          }}
        />
        <Tab.Screen 
          name="Rewards"
          component={RewardsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name="gift" size={30} color={focused ? '#102C57' : '#999'} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Octicons name="person" size={30} color={focused ? '#102C57' : '#999'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

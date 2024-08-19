import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, View, Text, TouchableNativeFeedback } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import HelpCentreScreen from './screens/HelpCentreScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import TNCScreen from './screens/TNCScreen';
import AboutScreen from './screens/AboutScreen';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const BottomStack = createBottomTabNavigator();

// Bottom Tab Navigator
function AppBottomStack() {
  return (
    <BottomStack.Navigator
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
      <BottomStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <Feather name="home" size={35} color={focused ? '#102C57' : '#999'} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <MaterialIcons name="restaurant-menu" size={35} color={focused ? '#102C57' : '#999'} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <MaterialCommunityIcons name="ticket-outline" size={35} color={focused ? '#102C57' : '#999'} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <Octicons name="person" size={35} color={focused ? '#102C57' : '#999'} />
          ),
        }}
      />
    </BottomStack.Navigator>
  );
}

const CustomDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: .15, backgroundColor: '#FFAD60', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 15}}>
        <Ionicons name='logo-reddit' size={60} color='white'/>
        <Text style={{color: 'white', fontSize: 15}}>My Profile Pic</Text>
      </View>
      <View style={{flex: .75}}>
        <DrawerItemList {...props} />
      </View>
      <View style={{flex: .1, paddingLeft: 15, paddingTop: 5, borderTopWidth: 1}}>
        <TouchableNativeFeedback>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name='log-out-sharp' size={40} />
            <Text style={{fontSize: 15}}>Logout</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>

  );
};

// Drawer Navigator
function AppDrawerStack() {
  return (
    <DrawerStack.Navigator initialRouteName="Home" drawerContent={(props: any) => <CustomDrawer {...props} />}>
      <DrawerStack.Screen name="Home" component={AppBottomStack} />
      <DrawerStack.Screen name="About Lumière" component={AboutScreen} />
      <DrawerStack.Screen name="My Orders" component={OrderHistoryScreen} />
      <DrawerStack.Screen name="Help Centre" component={HelpCentreScreen} />
      <DrawerStack.Screen name="Feedback" component={FeedbackScreen} />
      <DrawerStack.Screen name="Terms & Conditions" component={TNCScreen} />
    </DrawerStack.Navigator>
  );
}

// Main App Stack with Drawer and Tab Navigators
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppDrawerStack" component={AppDrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

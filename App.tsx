import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, View, Text, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import HelpCentreScreen from './screens/HelpCentreScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import TNCScreen from './screens/TNCScreen';
import AboutScreen from './screens/AboutScreen';
import drawerStyles from './modules/drawerStyle';

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
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }}>
      <View style={drawerStyles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image URL
            style={drawerStyles.profileImage}
          />
        </TouchableOpacity>
        <Text style={drawerStyles.username}>(username)</Text>
      </View>
      <View style={drawerStyles.drawerItems}>
        <DrawerItemList {...props} />
      </View>
      <View style={drawerStyles.logoutContainer}>
        <TouchableNativeFeedback>
          <View style={drawerStyles.logout}>
            <Ionicons name='log-out-sharp' size={40} />
            <Text style={drawerStyles.logoutText}>Logout</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

// Define components outside of inline function
const AboutLumiereScreen = () => (
  <DrawerScreenWithTabs component={AboutScreen} title="About Lumière" />
);

const MyOrdersScreen = () => (
  <DrawerScreenWithTabs component={OrderHistoryScreen} title="My Orders" />
);

const HelpCentreScreenWithTabs = () => (
  <DrawerScreenWithTabs component={HelpCentreScreen} title="Help Centre" />
);

const FeedbackScreenWithTabs = () => (
  <DrawerScreenWithTabs component={FeedbackScreen} title="Feedback" />
);

const TNCScreenWithTabs = () => (
  <DrawerScreenWithTabs component={TNCScreen} title="Terms & Conditions" />
);

// Integrating Bottom Tabs with Drawer Screens
function DrawerScreenWithTabs({ component: Component, title }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={title} component={Component} />
      <Stack.Screen name="AppBottomStack" component={AppBottomStack} />
    </Stack.Navigator>
  );
}

// Drawer Navigator
function AppDrawerStack() {
  return (
    <DrawerStack.Navigator initialRouteName="Home" drawerContent={(props: any) => <CustomDrawer {...props} />}>
      <DrawerStack.Screen name="Home" component={AppBottomStack} />
      <DrawerStack.Screen name="About Lumière" component={AboutLumiereScreen} />
      <DrawerStack.Screen name="My Orders" component={MyOrdersScreen} />
      <DrawerStack.Screen name="Help Centre" component={HelpCentreScreenWithTabs} />
      <DrawerStack.Screen name="Feedback" component={FeedbackScreenWithTabs} />
      <DrawerStack.Screen name="Terms & Conditions" component={TNCScreenWithTabs} />
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

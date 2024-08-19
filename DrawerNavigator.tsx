// DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
         headerShown: false,
         drawerLabelStyle: {
            fontSize: 16,
            fontFamily: 'Gantari-Regular',
         },
         drawerStyle: {
            backgroundColor: '#F8F0E5',
            width: 220,
         },
         drawerActiveTintColor: '#102C57',
         drawerInactiveTintColor: '#999',
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Menu" component={MenuScreen} />
      <Drawer.Screen name="Rewards" component={RewardsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

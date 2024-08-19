import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CustomDrawer from './components/CustomDrawer'; // Custom drawer content

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
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

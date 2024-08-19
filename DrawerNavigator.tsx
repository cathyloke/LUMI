import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import HelpCentreScreen from './screens/HelpCentreScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import TNCScreen from './screens/TNCScreen';
import AboutScreen from './screens/AboutScreen';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigator} /> {/* Use TabNavigator here */}
      <Drawer.Screen name="About Lumiere" component={AboutScreen} />
      <Drawer.Screen name="Menu" component={MenuScreen} />
      <Drawer.Screen name="Rewards" component={RewardsScreen} />
      <Drawer.Screen name="My Orders" component={OrderHistoryScreen} />
      <Drawer.Screen name="Help Centre" component={HelpCentreScreen} />
      <Drawer.Screen name="Feedback" component={FeedbackScreen} />
      <Drawer.Screen name="Terms & Conditions" component={TNCScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

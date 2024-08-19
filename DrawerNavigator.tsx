import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import HelpCentreScreen from './screens/HelpCentreScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import TNCScreen from './screens/TNCScreen';
import AboutLumiereScreen from './screens/AboutScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
   return (
      <NavigationContainer>
         <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About Lumiere" component={AboutLumiereScreen} />
            <Drawer.Screen name="Menu" component={MenuScreen} />
            <Drawer.Screen name="Rewards" component={RewardsScreen} />
            <Drawer.Screen name="My Orders" component={MyOrdersScreen} />
            <Drawer.Screen name="Help Centre" component={HelpCentreScreen} />
            <Drawer.Screen name="Feedback" component={FeedbackScreen} />
            <Drawer.Screen name="Terms & Conditions" component={TNCScreen} />
         </Drawer.Navigator>
      </NavigationContainer>
   );
};

export default DrawerNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileStack';
import OrderHistoryScreen from './OrderHistoryScreen';
import HelpCentreScreen from './HelpCentreScreen';
import FeedbackScreen from './FeedbackScreen';
import TermsAndConditionsScreen from './TNCScreen';
import TNCScreen from './TNCScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Profile' }} 
      />
      <Stack.Screen 
        name="OrderHistoryScreen" 
        component={OrderHistoryScreen} 
        options={{ title: 'Order History' }} 
      />
      <Stack.Screen 
        name="HelpCentreScreen" 
        component={HelpCentreScreen} 
        options={{ title: 'Help Centre' }} 
      />
      <Stack.Screen 
        name="FeedbackScreen" 
        component={FeedbackScreen} 
        options={{ title: 'Feedback' }} 
      />
      <Stack.Screen 
        name="TermsAndConditionsScreen" 
        component={TNCScreen} 
        options={{ title: 'Terms and Conditions' }} 
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;

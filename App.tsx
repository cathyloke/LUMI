import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

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
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const BottomStack = createBottomTabNavigator();

// Drawer code
function AppDrawerStack() {
    return (
        <DrawerStack.Navigator drawerContent={props => <DrawerView {...props} />}>
            <DrawerStack.Screen name='HomeScreen' component={HomeScreen} />
        </DrawerStack.Navigator>
    )


}

function DrawerView() {
    return (
        <View>
            <Text>
                Drawer View
            </Text>
        </View>
    )
}

// Bottom Stack Part

function AppBottomStack() {
    return (
        <BottomStack.Navigator>
            <BottomStack.Screen
                name='MenuScreen'
                component={MenuScreen}

            />
            <BottomStack.Screen
                name='RewardsScreen'
                component={RewardsScreen}
            />
        </BottomStack.Navigator>
    )
}

function BottomScreenOne() {
    return (
        <View>
            <Text>
                BottomScreenOne
            </Text>
        </View>
    )
}

function BottomScreenTwo() {
    return (
        <View>
            <Text>
                BottomScreenTwo
            </Text>
        </View>
    )
}



export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name="AppDrawerStack" component={AppDrawerStack} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
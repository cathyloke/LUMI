// DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: .15, backgroundColor: '#FFAD60', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 15}}>
        <Ionicons name='logo-reddit' size={60} color='white'/>
        <Text style={{color: 'white', fontSize: 14}}>(username)</Text>
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


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}  
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

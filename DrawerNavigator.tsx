import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerContent = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ fontSize: 20, margin: 20 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Text style={{ fontSize: 20, margin: 20 }}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
        <Text style={{ fontSize: 20, margin: 20 }}>Rewards</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={{ fontSize: 20, margin: 20 }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Menu" component={MenuScreen} />
      <Drawer.Screen name="Rewards" component={RewardsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { View, Text, TouchableNativeFeedback, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import drawerStyles from './modules/drawerStyle';

const Drawer = createDrawerNavigator();

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
            <Ionicons name='log-out-sharp' size={30} />
            <Text style={drawerStyles.logoutText}>Logout</Text>
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

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../modules/homeStyle';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const MenuScreen = () => {
   return (
<></>
   );
};

export default MenuScreen;
/*<Drawer.Navigator
screenOptions={{
  drawerActiveTintColor: 'darkslateblue',
  drawerActiveBackgroundColor: 'pink',
}}
>
<Drawer.Screen 
name="Welcome"
component={WelcomeScreen}
options={{
  drawerIcon: ({color}) => (
    <Ionicons name="home-outline" size={20} color={color} />
  ),
  drawerLabelStyle:{
    fontSize: 23
  }
}}
/>
</Drawer.Navigator>

sidebar maybe will be hard can try drawer, need more research
may use flat list for item
do the item into a button and while u click will go into detail pages with more screen
or like practical test on press and pop out or what

categories maybe also picker but conflict with sidebar
pagerview may be an option too
*/
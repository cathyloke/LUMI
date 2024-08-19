import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const CustomDrawer = (props: any) => {
   const navigation = useNavigation();

   return (
      <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
         <Image 
            source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your profile image URL
            style={styles.profileImage}
         />
         <Text style={styles.profileName}>John Doe</Text>
         <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
         </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <DrawerItemList {...props} />

      <View style={styles.divider} />

      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Rewards')}>
         <Feather name="gift" size={22} color="#333" />
         <Text style={styles.drawerLabel}>Rewards</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('HelpCentre')}>
         <Feather name="help-circle" size={22} color="#333" />
         <Text style={styles.drawerLabel}>Help Centre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => { /* Add your logout logic here */ }}>
         <Feather name="log-out" size={22} color="#333" />
         <Text style={styles.drawerLabel}>Logout</Text>
      </TouchableOpacity>
      </DrawerContentScrollView>
   );
};

export default CustomDrawer;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 20,
   },
   header: {
      alignItems: 'center',
      marginBottom: 20,
   },
   profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
   },
   profileName: {
      fontSize: 18,
      fontFamily: 'Gantari-Bold',
      marginVertical: 10,
   },
   editProfileButton: {
      backgroundColor: '#102C57',
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 5,
   },
   editProfileText: {
      color: '#fff',
      fontSize: 14,
      fontFamily: 'Gantari-Regular',
   },
   divider: {
      height: 1,
      backgroundColor: '#E0E0E0',
      marginVertical: 10,
   },
   drawerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
   },
   drawerLabel: {
      marginLeft: 20,
      fontSize: 16,
      fontFamily: 'Gantari-Regular',
      color: '#333',
   },
});

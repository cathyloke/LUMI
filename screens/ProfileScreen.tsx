import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from '../modules/profileStyle';
import { generalStyles } from '../modules/generalStyle';

import OrderHistoryScreen from './ProfileMenu/OrderHistoryScreen';
import HelpCentreScreen from './ProfileMenu/HelpCentreScreen';
import FeedbackScreen from './ProfileMenu/FeedbackScreen';
import TNCScreen from './ProfileMenu/TNCScreen';
import AboutScreen from './ProfileMenu/AboutScreen';
import LogInScreen from './Account/LogInScreen';
import LogoutScreen from './Account/LogoutScreen';

const Stack = createStackNavigator();

const ProfileDetailsScreen = ({route, navigation}: any) => {
  const [username, setUsername] = useState('Alyssa');
  const [email, setEmail] = useState('alyssa@example.com');
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);

  const handleEdit = () => {
    if (isEditing) {
      setUsername(newUsername);
      setEmail(newEmail);
    }
    setIsEditing(!isEditing);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* FOR USER PROFILE */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../img/profile-placeholder.jpeg')}
            style={styles.profileImage}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Username:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={newUsername}
                onChangeText={setNewUsername}
              />
            ) : (
              <Text style={styles.value}>{username}</Text>
            )}
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Email:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={newEmail}
                onChangeText={setNewEmail}
              />
            ) : (
              <Text style={styles.value}>{email}</Text>
            )}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text style={styles.buttonText}>
              {isEditing ? 'Save' : 'Edit Profile'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => navigation.navigate('LogoutScreen')}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate('OrderHistoryScreen')}
          >
            <Text style={styles.optionText}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate('HelpCentreScreen')}
          >
            <Text style={styles.optionText}>Help Centre</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate('FeedbackScreen')}
          >
            <Text style={styles.optionText}>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate('TNCScreen')}
          >
            <Text style={styles.optionText}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate('AboutScreen')}
          >
            <Text style={styles.optionText}>About Lumière</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ProfileScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: generalStyles.header,
      }}
    >
      <Stack.Screen
        name="ProfileDetailsScreen"
        component={ProfileDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} options={{title: 'OrderHistoryScreen'}}/>
      <Stack.Screen name="HelpCentreScreen" component={HelpCentreScreen} options={{title: 'Help Centre'}}/>
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} options={{title: 'Feedback'}}/>
      <Stack.Screen name="TNCScreen" component={TNCScreen} options={{title: 'Terms & Conditions'}}/>
      <Stack.Screen name="AboutScreen" component={AboutScreen} options={{title: 'About Lumière'}}/>
      <Stack.Screen name="LogoutScreen" component={LogoutScreen} options={{title: 'Logout'}}/>
    </Stack.Navigator>
  );
};

export default ProfileScreen;

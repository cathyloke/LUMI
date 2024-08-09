import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from '../modules/profileStyle';

import OrderHistoryScreen from './OrderHistoryScreen';
import HelpCentreScreen from './HelpCentreScreen';
import FeedbackScreen from './FeedbackScreen';
import TNCScreen from './TNCScreen';
import AboutScreen from './AboutScreen';

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
            <Text style={styles.label}>Name:</Text>
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
          <TouchableOpacity style={[styles.button, styles.logoutButton]}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate('OrderHistoryScreen')}
          >
            <Text style={styles.optionText}>Order History</Text>
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
            <Text style={styles.optionText}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate('AboutScreen')}
          >
            <Text style={styles.optionText}>About Lumiere</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileDetailsScreen"
        component={ProfileDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
      <Stack.Screen name="HelpCentreScreen" component={HelpCentreScreen} />
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
      <Stack.Screen name="TNCScreen" component={TNCScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default ProfileScreen;

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../modules/homeStyle';

const AboutScreen = () => {
   return (
      <View>
         <View>
            <Text style={styles.font}>About Us</Text>
         </View>
      </View>
   );
};

export default AboutScreen;

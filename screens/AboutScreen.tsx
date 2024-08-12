import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../modules/generalStyle';

const AboutScreen = () => {
   return (
      <View>
         <View>
            <Text style={styles.header}>About Lumière</Text>
         </View>
      </View>
   );
};

export default AboutScreen;

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../modules/homeStyle';

const MenuScreen = () => {
   return (
      <View>
         <View>
            <Text style={styles.font}>Order History</Text>
         </View>
      </View>
   );
};

export default MenuScreen;

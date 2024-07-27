import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../modules/style';

class Greeting extends React.Component {
  state = {
    hour: null,
    username: 'Alyssa',
  };

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({ hour });
  };

  render() {
    const { hour, username } = this.state;
    return (
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>
          {hour < 12
            ? 'Good Morning'
            : hour < 18
            ? 'Good Afternoon'
            : 'Good Evening'}{' '}
          {username}
        </Text>
      </View>
    );
  }
}

export default Greeting;

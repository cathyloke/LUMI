import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../modules/style';

const images = [
  require('../img/promo/yves.jpg'),
  require('../img/promo/chuu.jpg'),
];

const bestSellers = [
  {title: 'Tiramisu cake', image: require('../img/food/tiramisu-cake.jpeg')},
  {title: 'Chocolate cake', image: require('../img/food/chocolate-cake.jpg')},
  {title: 'Matcha cake', image: require('../img/food/matcha-cake.jpeg')},
];

const HomeScreen = () => {
  const [imgActive, setImgActive] = useState(0);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getTimeOfDayGreeting = () => {
      const hours = new Date().getHours();
      if (hours < 12) return 'Good Morning';
      if (hours < 18) return 'Good Afternoon';
      return 'Good Evening';
    };

    setGreeting(getTimeOfDayGreeting());
  }, []);

  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <View>
      <SafeAreaView style={styles.container}>
        {/* FOR PHOTO SLIDESHOW */}
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((e, index) => (
              <Image
                key={index}
                resizeMode="stretch"
                style={styles.wrap}
                source={e}
              />
            ))}
          </ScrollView>

          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={imgActive == index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>

        {/* FOR DELIVERY, PICKUP, MERCH BUTTONS */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Delivery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pickup</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Merch</Text>
          </TouchableOpacity>
        </View>

        {/* GREETING MESSAGE */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>
            {greeting}, Dummy! {/* replace dummy with {username} */}
          </Text>
        </View>

        {/* BEST SELLERS SECTION */}
        <View style={styles.bestSellersContainer}>
          <Text style={styles.bestSellersTitle}>Best Sellers</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.bestSellersScrollView}>
            {bestSellers.map((item, index) => (
              <View key={index} style={styles.bestSellersItem}>
                <Image source={item.image} style={styles.bestSellersImage} />
                <Text style={styles.bestSellersText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
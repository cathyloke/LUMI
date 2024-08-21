import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, SafeAreaView,TouchableHighlight, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createStackNavigator} from '@react-navigation/stack';
import { styles } from '../modules/menuStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack=createStackNavigator();

type FoodItem={
  id: string;
  title: string;
  price: string;
  image: any;
  description: string;
  type: string;
};

type Categories={
  [key:string]:FoodItem[];
};

const menu:Categories={ //item
  'Food':[
  {
    id:'001',
    title:'Egg croissant sandwich',
    price:'RM 8.00',
    image:require('../img/food/FoodEggCroissantSandwich.png'),
    description:'A delicious Egg Croissant Sandwich is suit for you as a breakfast',
    type:'Breakfast'
  },
  {
    id:'002',
    title:'Berry Pancakes',
    price:'RM 9.90',
    image:require('../img/food/FoodBerryPancakes.png'),
    description:'Berry Pancakes, a sweet and sour taste sure will make you happy whole day',
    type:'Dessert'
  },
  {
    id:'003',
    title:'Avocado toast',
    price:'RM 8.90',
    image:require('../img/food/FoodAvocadoToast.png'),
    description:'Avocado Toast, fast prepared breakfast, speed up and save your time',
    type:'Breakfast'
  },{
    id:'004',
    title:'Chocolate cake',
    price:'RM 15.90',
    image:require('../img/food/FoodChocolateCake.png'),
    description:'Chocolate Cake, a cake flavored with melted chocolate,and cocoa powder put on top',
    type:'Dessert'
  },{
    id:'005',
    title:'New York cheesecake',
    price:'RM 12.90',
    image:require('../img/food/FoodNewYorkCheesecake.jpeg'),
    description:'New York Cheesecake, full of cheese taste and smooth texture',
    type:'Dessert'
  },{
    id:'006',
    title:'Tiramisu cake',
    price:'RM 13.90',
    image:require('../img/food/FoodTiramisuCake.jpg'),
    description:'Tiramisu Cake, a vanilla sponge cakes soaked in coffee, frosted with a fluffy mascarpone cream and topped with a dusting of cocoa powder',
    type:'Dessert'
  },{
    id:'007',
    title:'Hokkaido Cheese Tart',
    price:'RM 6.90',
    image:require('../img/food/FoodHokkaidoCheeseTart.png'),
    description:'Hokkaido Cheese Tart, delicious cheese tart with full of cheese',
    type:'Dessert'
  },{
    id:'008',
    title:'Macarons',
    price:'RM 4.90',
    image:require('../img/food/FoodMacarons.jpg'),
    description:'Macarons, a sweet meringue-based confection dessert',
    type:'Dessert'
  }],
  'Drink':[
  {
    id:'001',
    title:'Americano',
    price:'RM 5.90',
    image:require('../img/drinks/DrinksAmericano.png'),
    description:'Americano, diluting an espresso shot with hot water, have a lighter taste',
    type:'Coffee'
  },{
    id:'002',
    title:'Latte',
    price:'RM 9.90',
    image:require('../img/drinks/DrinksLatte.png'),
    description:'Latte, made by espresso and steamed milk',
    type:'Coffee'
  },{
    id:'003',
    title:'Latte special',
    price:'RM 12.90',
    image:require('../img/drinks/DrinksLatteSpecial.png'),
    description:'Latte, made by espresso and steamed milk, added with chocolate and ice cream',
    type:'Coffee'
  },{
    id:'004',
    title:'Cappuccino',
    price:'RM 8.90',
    image:require('../img/drinks/DrinksCappuccino.png'),
    description:'Cappuccino, espresso-based coffee drink with steamed milk including a layer of milk foam',
    type:'Coffee'
  },{
    id:'005',
    title:'Mocha',
    price:'RM 9.90',
    image:require('../img/drinks/DrinksMocha.png'),
    description:'Mocha, used good quality coffee that is made from a specific coffee bean',
    type:'Coffee'
  },{
    id:'006',
    title:'Matcha Latte',
    price:'RM 12.90',
    image:require('../img/drinks/DrinksMatchaLatte.jpeg'),
    description:'Matcha Latte, Latte with mixing of matcha powder, steaming hot milk and honey',
    type:'Coffee'
  }]
}


const CustomStackContent = ({ navigation }: any) => { //side bar
  const [activeCategory, setActiveCategory] = useState<string>('Food');

  const handlePress = (category: string) => {
    setActiveCategory(category);
    navigation.navigate('CategoryScreen', { category });
  };

  return (
    <View style={styles.sidebar}>
      <TouchableHighlight
        style={[styles.sidebarItem, activeCategory === 'Food' && { backgroundColor: '#DAC0A3' }]}
        underlayColor="#DAC0A3"
        onPress={() => handlePress('Food')}
      >
        <View style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons name="food" size={24} color={activeCategory === 'Food' ? '#102C57' : '#333'} />
          <Text style={[styles.sidebarText, activeCategory === 'Food' && { color: '#102C57' }]}>Food</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.sidebarItem, activeCategory === 'Drink' && { backgroundColor: '#DAC0A3' }]}
        underlayColor="#DAC0A3"
        onPress={() => handlePress('Drink')}
      >
        <View style={{ alignItems: 'center' }}>
          <Entypo name="drink" size={24} color={activeCategory === 'Drink' ? '#102C57' : '#333'} />
          <Text style={[styles.sidebarText, activeCategory === 'Drink' && { color: '#102C57' }]}>Drink</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const ItemDetailScreen = ({route}: any) => { //item detail screen
  const {item} = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1,justifyContent:'center',marginBottom:20}}>
        <Image source={item.image} style={styles.detailImage} />
        <Text style={styles.detailTitle}>{item.title}</Text>
        <Text style={styles.detailPrice}>{item.price}</Text>
        <Text style={styles.detailDescription}>{item.description}</Text>

        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'center', marginTop:20}}>
          <TouchableOpacity onPress={() => setQuantity(q => Math.max(1, q - 1))} style={{marginRight:20}}>
            <Ionicons name="remove-circle-outline" size={30} color="#102C57" />
          </TouchableOpacity>

          <Text style={{ fontSize:30, fontWeight: 'bold', color: '#102C57' }}>{quantity}</Text>

          <TouchableOpacity onPress={() => setQuantity(q => q + 1)} style={{marginLeft:20}}>
            <Ionicons name="add-circle-outline" size={30} color="#102C57" />
          </TouchableOpacity>
          
        </View>
      </View>
    </SafeAreaView>
  );
};


const CategoryScreen = ({navigation, route}: any) => {
  const {category}: {category?: keyof Categories}=route.params||{};

  if (!category||!menu[category]) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Category not found</Text>
      </SafeAreaView>
    );
  }

  const [selectedType, setSelectedType] = useState<string>('All');

  const foodTypes = ['All', ...new Set(menu[category].map(item=>item.type))];

  const filteredItems = selectedType === 'All' ? menu[category]:menu[category].filter(item=>item.type === selectedType);

  return (
    <SafeAreaView style={styles.content}>
      <Picker 
        selectedValue={selectedType} 
        style={styles.picker} 
        onValueChange={(itemValue) => setSelectedType(itemValue)}
      >
        {foodTypes.map(type => (<Picker.Item key={type} label={type} value={type}/>))}
      </Picker>

      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <TouchableHighlight 
            style={styles.menuRow} 
            underlayColor="#DAC0A3"
            onPress={() => navigation.navigate('ItemDetail', { item })}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={item.image} style={styles.imageRow} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const MenuScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <CustomStackContent navigation={navigation} />
      <Stack.Navigator>
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          initialParams={{category:'Food'}}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetailScreen}
          options={{
            headerStyle: {backgroundColor:'#F8F0E5'},
            headerTitle: '',
            headerBackTitleVisible: false,
            headerTintColor:'#102C57',
          }}
        />
      </Stack.Navigator>
    </View>
  );
};
export default MenuScreen;
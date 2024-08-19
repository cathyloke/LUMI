import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from '../modules/menuStyle';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const categories={
  'Food':[
  {
    id:'001',
    title:'Egg croissant sandwich',
    price:'RM 8.90',
    image:require('../img/food/FoodEggCroissantSandwich.png'),
    description:'A delicious Egg Croissant Sandwich is suit for you as a breakfast',
    type:'breakfast'
  },
  {
    id:'002',
    title:'Berry Pancakes',
    price:'RM 9.90',
    image:require('../img/food/FoodBerryPancakes.png'),
    description:'Berry Pancakes, a sweet-and-sour taste sure will make you happy whole day',
    type:'dessert'
  },
  {
    id:'003',
    title:'Avocado toast',
    price:'RM 8.90',
    image:require('../img/food/FoodAvocadoToast.png'),
    description:'Avocado Toast, fast prepared breakfast, speed up and save your time',
    type:'breakfast'
  },{
    id:'004',
    title:'Chocolate cake',
    price:'RM 15.90',
    image:require('../img/food/FoodChocolateCake.png'),
    description:'Chocolate Cake, a cake flavored with melted chocolate,and cocoa powder put on top',
    type:'dessert'
  },{
    id:'005',
    title:'New York cheesecake',
    price:'RM 12.90',
    image:require('../img/food/FoodNewYorkCheesecake.jpeg'),
    description:'New York Cheesecake, full of cheese taste and smooth texture',
    type:'dessert'
  },{
    id:'006',
    title:'Tiramisu cake',
    price:'RM 13.90',
    image:require('../img/food/FoodTiramisuCake.jpg'),
    description:'Tiramisu Cake, a vanilla sponge cakes soaked in coffee, frosted with a fluffy mascarpone cream and topped with a dusting of cocoa powder',
    type:'dessert'
  },{
    id:'007',
    title:'Hokkaido Cheese Tart',
    price:'RM 6.90',
    image:require('../img/food/FoodHokkaidoCheeseTart.png'),
    description:'Hokkaido Cheese Tart, delicious cheese tart with full of cheese',
    type:'dessert'
  },{
    id:'008',
    title:'Macarons',
    price:'RM 4.90',
    image:require('../img/food/FoodMacarons.jpg'),
    description:'Macarons, a sweet meringue-based confection dessert',
    type:'dessert'
  }],
  'Drinks':[
  {
    id:'001',
    title:'Americano',
    price:'RM 5.90',
    image:require('../img/drinks/DrinksAmericano.png'),
    description:'Americano, diluting an espresso shot with hot water, have a lighter taste',
    type:'coffee'
  },{
    id:'002',
    title:'Latte',
    price:'RM 9.90',
    image:require('../img/drinks/DrinksLatte.png'),
    description:'Latte, made by espresso and steamed milk',
    type:'coffee'
  },{
    id:'003',
    title:'Latte special',
    price:'RM 12.90',
    image:require('../img/drinks/DrinksLatteSpecial.png'),
    description:'Latte, made by espresso and steamed milk, added with chocolate and ice cream',
    type:'coffee'
  },{
    id:'004',
    title:'Cappuccino',
    price:'RM 8.90',
    image:require('../img/drinks/DrinksCappuccino.png'),
    description:'Cappuccino, espresso-based coffee drink with steamed milk including a layer of milk foam',
    type:'coffee'
  },{
    id:'005',
    title:'Mocha',
    price:'RM 9.90',
    image:require('../img/drinks/DrinksMocha.png'),
    description:'Mocha, used good quality coffee that is made from a specific coffee bean',
    type:'coffee'
  },{
    id:'006',
    title:'Matcha Latte',
    price:'RM 12.90',
    image:require('../img/drinks/DrinksMatchaLatte.jpeg'),
    description:'Matcha Latte, Latte with mixing of matcha powder, steaming hot milk and honey',
    type:'coffee'
  }]
}

const MenuScreen = () => {
   return (
      <Stack.Navigator screenOptions={{}}>
        <>
        </>
      </Stack.Navigator>
   );
};

export default MenuScreen;

/*
use flat list for item
do the item into a button and while u click will go into detail pages with more screen
or like practical test on press and pop out or what

categories side bar, inside the categories got another categories with picker which can choose the type
*/
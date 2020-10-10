/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Card} from "react-native-elements"; 

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StarRating from './components/StarRating';

export default function App() {
  return(
    <View style={styles.sectionContainer}>
      <TouchableOpacity style={styles.card}>
        <Image 
          style={styles.cardImage}
          source={require('./assets/glucodown.jpg')}
       />
       
      </TouchableOpacity>
      
      <Text>
        Rate this product based on each of these factors?
      </Text>
      
      <Button color="#57BC90"
  
        title="Submit">
      </Button>
  
  </View>
  )
};

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    resizeMode:'contain'
  },
 
  cardImage:{
    resizeMode:'contain',
    height: 200,
    width:'25%',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
  },
  card:{
    backgroundColor:'#fff',
    marginBottom:10,
    marginLeft:'2%',
    width:'96%',
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:1,
    shadowOffset:{
      width:3,
      height:3
        },
        alignItems:'center',
        justifyContent:'center'

  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems:'center'
  },
 
});

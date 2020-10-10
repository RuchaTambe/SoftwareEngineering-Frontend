import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StarRating from './components/StarRating';

const Card=()=> {
  return(
   
      /*<TouchableOpacity style={styles.card}>
        <Image 
          style={styles.cardImage}
          source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FGLUCODOWN-Diabetic-Formula-60-Day-Supply%2Fdp%2FB079Y6B6S1&psig=AOvVaw0Sr40CVxzTKw0zW4u0qKtC&ust=1602403922626000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDY0vbJqewCFQAAAAAdAAAAABAL'}}
       />
       
      </TouchableOpacity>
  */
      <Text>
          Card Title
        </Text>
    
  )
};

const styles = StyleSheet.create({
 
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
  
});

export default Card;
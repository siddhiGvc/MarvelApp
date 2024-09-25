import React,{useState} from 'react';
import { Image, StyleSheet, Platform ,View ,Dimensions,Text,TextInput} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen() {
  const [password,setPassword]=useState('');

  return (
    <LinearGradient
    colors={['#008080', '#23B22E']}
    style={styles.container}
  >
    <Text style={styles.text}>Please Enter Desired Level Password</Text>
    <TextInput
       style={styles.textInput}
       keyboardType="numeric"
       value={password}
       onChangeText={(text) => setPassword(text)} // Update the state as user types
       placeholder="Type here..."
       secureTextEntry={true}
    />
    <Text style={styles.text1}>Level 1: RUN / MANUAL TEST</Text>
    <Text style={styles.text1}>Level 2: PROGRAM SETUP</Text>
    <Text style={styles.text1}>Level 3: Calibration / Enable Disable Head</Text>
    <View style={styles.buttonStyle}>
        <Text style={styles.text2}>RUN MACHINE</Text>
    </View>
    </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  container:{
    width:windowWidth,
    height:windowHeight,
    flex: 1,
    flexDirection:'column',
    justifyContent:'space-around',
    textAlign:'center',
    alignItems:'center',
    
    
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign:'center'
  },
  text1: {
    color: '#fff',
    fontSize: 20
  },
  text2: {
    color: '#fff',
    fontSize: 20,
    fontWeight:'500'
  },
  textInput:{
    width:200,
    height:40,
    borderRadius:5,
    backgroundColor:'white',
    color:'black',
    fontSize:23,
    marginTop:5,
    textAlign:'center'
  } ,
  buttonStyle:{
    width:300,
    height:50,
    backgroundColor:'#0080FF',
    borderRadius:10,
    color:'white',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center'

  }

 
});

import React,{useEffect, useState} from 'react';
import { Image, StyleSheet, Platform ,View ,Dimensions,Text,TextInput,TouchableOpacity} from 'react-native';
// import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import {useRouter,Href} from 'expo-router'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';




// import { View } from 'react-native-reanimated/lib/typescript/Animated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AdminLoginScreen() {
  const [password,setPassword]=useState('');

  const router=useRouter();

 
  return (
    <LinearGradient
    colors={['#008080', '#23B22E']}
    style={styles.container}
  >
      <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <TextInput keyboardType='default' style={styles.buttonText} placeholder='Enter Username...'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
        <TextInput keyboardType='default' style={styles.buttonText} placeholder='Enter Password...' secureTextEntry/>
        </TouchableOpacity>
        <View style={styles.row}>
        <TouchableOpacity style={styles.button1} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.setupButton} onPress={() => router.push('/menu')}>
          <Text style={styles.setupButtonText}>SYSTEM SETUP</Text>
        </TouchableOpacity>
       
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
  row:{
    flexDirection:'row'
  },

  button: {
    height: windowHeight/7, // Set button height
    width: windowWidth/2.5, // Ensure the button takes the full width of the container
    backgroundColor: '#FFFFFF', // Set your button color
    borderRadius: 10, // Rounded corners
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    marginBottom: 5, // Spacing between buttons
  },
  button1: {
    height: windowHeight/9, // Set button height
    width: windowWidth/6, // Ensure the button takes the full width of the container
    backgroundColor: '#FFFFFF', // Set your button color
    borderRadius: 10, // Rounded corners
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    marginBottom: 5, // Spacing between buttons
    marginHorizontal:'3%'
  },
  setupButton: {
    height: windowHeight/7, // Set button height
    width: windowWidth/2.5, // Ensure the button takes the full width of the container
    backgroundColor: '#007BFF', // Set your button color
    borderRadius: 10, // Rounded corners
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    marginBottom: 5, // Spacing between buttons
  },
  buttonText: {
    color: 'black', // White text color
    fontSize: 20, // Adjust font size as needed
  },
  setupButtonText: {
    color: 'white', // White text color
    fontSize: 20, // Adjust font size as needed
    fontWeight:'500'
  },

 
});

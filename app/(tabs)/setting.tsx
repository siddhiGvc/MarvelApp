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

export default function SettingScreen() {
  const [password,setPassword]=useState('');

  const router=useRouter();

 
  return (
    <LinearGradient
    colors={['#008080', '#23B22E']}
    style={styles.container}
  >
    <Text style={styles.title}>SETTINGS</Text>
    <View style={styles.row}>
         <View style={styles.subContainer1}>
            <Text style={styles.text1}>260 V</Text>
            <Text style={styles.text1}>250 V</Text>
            <Text style={styles.text1}>240 V</Text>
            <Text style={styles.text1}>230 V</Text>
            <Text style={styles.text1}>220 V</Text>
            <Text style={styles.text1}>210 V</Text>
            <Text style={styles.text1}>200 V</Text>
            <Text style={styles.text1}>190 V</Text>
            <Text style={styles.text1}>180 V</Text>
        </View>
        <View style={styles.subContainer2}>
            <Text style={styles.text2}>DC</Text>
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' /> 
           
        </View>
        <View style={styles.subContainer2}>
            <Text style={styles.text2}>VIB</Text>
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' />
            <TextInput style={styles.textInput} keyboardType='numeric' /> 
           
        </View>
     

    </View>
    <View style={styles.row1}>
    <View style={styles.subContainer3}>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/systemSetup')}>
          <Text style={styles.buttonText}>EXIT</Text>
        </TouchableOpacity>
    </View>
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
    padding:15
    
    
  },
  title: {
    color: 'yellow',
    fontSize: 25,
    textAlign:'center',
    fontWeight:'500'
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-around'

  },
  row1:{
    width:windowWidth,
    height:windowHeight/25,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'

  },
  subContainer1:{
    flexDirection:'column',
    justifyContent:'flex-end',
    marginHorizontal:'3%'

  },
  subContainer2:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:'3%'
    
  },
  subContainer3:{
    flexDirection:'column',
    justifyContent:'flex-end',
    marginHorizontal:'3%',
    alignItems:'flex-end'

  },
  text1: {
    color: 'yellow',
    fontSize: 18,
    marginVertical:'6.3%'
  },
  text2: {
    color: 'blue',
    fontSize: 20,
    fontWeight:'500'
  },
  textInput:{
    width:windowWidth/8,
    height:windowHeight/14,
    borderRadius:5,
    backgroundColor:'white',
    color:'black',
    fontSize:18,
    marginTop:5,
    textAlign:'center'
  } ,
  button: {
    height: windowHeight/7.4, // Set button height
    width: windowWidth/10, // Ensure the button takes the full width of the container
    backgroundColor: '#007BFF', // Set your button color
    borderRadius: 10, // Rounded corners
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    marginBottom: 5, // Spacing between buttons
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16, // Adjust font size as needed
  },
 
});

import React,{useState} from 'react';
import { Image, StyleSheet, Platform ,View ,Dimensions,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { BarChart } from 'react-native-chart-kit';
import { useRouter,Href } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function EmptyMachineScreen() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const router=useRouter();

  return (
    <LinearGradient
    colors={['#008080', '#23B22E']}
    style={styles.container}
  >
   
    <View style={styles.subContainer1}>
        <Text style={styles.title}>SET VIBRATOR TO EMPTY MACHINE</Text>
    </View>
     


     <View style={styles.row}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>FRONT VIBRATOR </Text>
          <View style={styles.row}>
          <TextInput keyboardType='numeric' value={value1.toString()} readOnly style={styles.textInput1} />
          <Text style={styles.label}>AMP</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="#D3D3D3"
            thumbTintColor="blue"
            value={value1}
            onValueChange={(val) => setValue1(val)}
        />
      
        </View>
        <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>REAR VIBRATOR </Text>
        <View style={styles.row}>
        <TextInput
            style={styles.textInput1}
            keyboardType="numeric"
            value={value2.toString()}
            readOnly
           
            />
          <Text style={styles.label}>AMP</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="#D3D3D3"
            thumbTintColor="blue"
            value={value2}
            onValueChange={(val) => setValue2(val)}
        />
       </View>

    </View>
       <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>STOP</Text>
        </TouchableOpacity>
        </View>



   
   
    </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  container:{
    width:windowWidth,
    height:windowHeight,
    textAlign:'center',
    alignItems:'center',
    
    
  },
  title:{
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color:'yellow'
  },

  row: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-around',
    marginTop:30

    
  },
  label:{
    fontSize:15,
    color:'white'
  },
  subContainer1: {
    // flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5
  },
  subContainer2: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'yellow'
  },
  textInput1: {
    height: windowHeight/7.4/2,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width:windowWidth/5, // Ensures inputs take full width of the container
    backgroundColor:'white',
    color:'black'
  },
  textInput2: {
    height: windowHeight/7.4,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: windowWidth/4, // Ensures inputs take full width of the container
    backgroundColor:'pink',
    color:'black'
  },
  textInput3: {
    height: windowHeight/7.4,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: windowWidth/6, // Ensures inputs take full width of the container
    backgroundColor:'white',
    color:'black'
  },
  textInput4: {
    height: windowHeight/15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: windowWidth/7, // Ensures inputs take full width of the container
    backgroundColor:'white',
    color:'black'
  },
 
  
  buttonContainer: {
    flexDirection: 'column',
    flexWrap:'wrap',
    marginHorizontal:'2%'
  },

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
    fontSize: 20, // Adjust font size as needed
    textAlign:'center'
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'yellow',  // Change color as needed
    width: '100%',
    marginVertical: 3,  // Optional: for spacing
  },
  box:{
    width:windowWidth/4,
    height:windowHeight/4,
    borderWidth:4,
    borderRadius:20,
    borderColor:'orange',
    alignItems:'center',
    justifyContent:'center'


  },

  box1:{
    width:windowWidth/4,
    height:windowHeight/7.4,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'

  },
  resetText:{
    textAlign:'center',
    fontSize:15,
    color:'white',
    fontWeight:'500'
  },
  slider:{
    width: windowWidth/2.5,
     height: windowHeight/6 ,
     backgroundColor:'white',
     marginTop:10,
     borderRadius:20,
     marginBottom:20
  }
 
});

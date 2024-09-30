import React,{useState} from 'react';
import { Image, StyleSheet, Platform ,View ,Dimensions,Text,TextInput,Button,TouchableOpacity} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { BarChart } from 'react-native-chart-kit';
import {useRouter,Href} from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SystemSetupScreen() {
  const [password,setPassword]=useState('');
  const [isRunning, setIsRunning] = useState(false);

  const router=useRouter();

  const toggleMachine = () => {
    setIsRunning(!isRunning);
    // Send command to machine backend here (via HTTP request or WebSocket)
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],

    datasets: [
      {
        data: [20, 105, 28 ,34],
      },
    ],
  };

  return (
    <LinearGradient
    colors={['#008080', '#23B22E']}
    style={styles.container}
  >
    <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.title}>SYSTEM SETUP</Text>
        </View>
        <View style={styles.subContainer1}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>VIBRATOR ADJUST VOLT</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.subContainer1}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>SETTING WINDOW</Text>
        </TouchableOpacity>
        </View>
    </View>
    <View style={styles.subContainer1}>
            <Text style={styles.subTitle} >SELECT HEAD TO BE DISPLAYED</Text>
        </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'HEAD1 DISABLE' : 'HEAD1 ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'HEAD2 DISABLE' : 'HEAD2 ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'HEAD3 DISABLE' : 'HEAD3 ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'HEAD4 DISABLE' : 'HEAD4 ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'FONT DISABLE' : 'FONT ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'FONT DISABLE' : 'FONT ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'FONT DISABLE' : 'FONT ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'FONT DISABLE' : 'FONT ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'REAR DISABLE' : 'REAR ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'REAR DISABLE' : 'REAR ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'REAR DISABLE' : 'REAR ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'REAR DISABLE' : 'REAR ENABLE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
    </View>
    <View style={styles.horizontalLine} />

    
    <View style={styles.row}>
        <View style={styles.subContainer1}>
                <TouchableOpacity style={styles.button1} onPress={() => router.push('/menu')}>
                <Text style={styles.buttonText}>DECIMAL POINT</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.subContainer1}>
                <TouchableOpacity style={styles.button1} onPress={() => router.push('/menu')}>
                <Text style={styles.buttonText}>SAVE CURRENT HEAD OFF</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.subContainer1}>
               <TouchableOpacity style={styles.button1} onPress={() => router.push('/menu')}>
                <Text style={styles.buttonText}>MOTOR FUNCTION OFF</Text>
                </TouchableOpacity>
        </View>
       

    </View>
    

     <View style={styles.row}>
    
        <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
                <Text style={styles.buttonText}>SAVE</Text>
                </TouchableOpacity>
              
         </View>
       
         <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
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
    textAlign:'center',
    // alignItems:'flex-start',
    
    
  },

  title:{
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color:'yellow'
  },
  subTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color:'white'
  },

  row: {
    
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
    // justifyContent: 'flex-start',
   
    
  },
  subContainer1: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:5
  },
  subContainer2: {
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
    width:windowWidth/6, // Ensures inputs take full width of the container
    backgroundColor:'white'
  },
  textInput2: {
    height: windowHeight/7.4,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: windowWidth/4, // Ensures inputs take full width of the container
    backgroundColor:'pink'
  },
  textInput3: {
    height: windowHeight/7.4,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: windowWidth/6, // Ensures inputs take full width of the container
    backgroundColor:'white'
  },
  textInput4: {
    height: windowHeight/16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: windowWidth/7, // Ensures inputs take full width of the container
    backgroundColor:'white'
  },
 
  
  buttonContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    marginTop:10
  },

  button: {
    height: windowHeight/7.4, // Set button height
    width: windowWidth/7, // Ensure the button takes the full width of the container
    backgroundColor: '#007BFF', // Set your button color
    borderRadius: 10, // Rounded corners
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    marginBottom: 10,
    padding:2 // Spacing between buttons
  },
  button1: {
    height: windowHeight/7.4, // Set button height
    width: windowWidth/4, // Ensure the button takes the full width of the container
    backgroundColor: '#007BFF', // Set your button color
    borderRadius: 10, // Rounded corners
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    padding:2 // Spacing between buttons
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 14, // Adjust font size as needed
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'yellow',  // Change color as needed
    width: '100%',
    marginVertical: 3,  // Optional: for spacing
  },
  box:{
    width:windowWidth/1.6,
    height:windowHeight/5,
    borderWidth:2,
    borderRadius:20,
    borderColor:'orange',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginLeft:30


  },

  box1:{
    width:windowWidth/4,
    height:windowHeight/7.4,
    backgroundColor:'#007BFF',
    alignItems:'center',
    justifyContent:'center'

  },
  resetText:{
    textAlign:'center',
    fontSize:15,
    color:'white',
    fontWeight:'500'
  }

 
});

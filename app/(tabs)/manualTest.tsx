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

export default function ManualTestScreen() {
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
    <View style={styles.subContainer1}>
        <Text style={styles.title}>MANUAL TEST</Text>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'HEAD1' : 'HEAD1'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'HEAD2' : 'HEAD2'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'HEAD3' : 'HEAD3'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'HEAD4' : 'HEAD4'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'DUMP OFF' : 'DUMP ON'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'DUMP OFF' : 'DUMP ON'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'DUMP OFF' : 'DUMP ON'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'DUMP Off' : 'DUMP ON'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
    </View>
    <View style={styles.row}>
    <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'BULK OFF' : 'BULK ON'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'BULK OFF' : 'BULK ON'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'BULK OFF' : 'BULK ON'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'BULK OFF' : 'BULK ON'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'VIBRATOR TEST' : 'VIBRATOR TEST'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'VIBRATOR TEST' : 'VIBRATOR TEST'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'VIBRATOR TEST' : 'VIBRATOR TEST'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'VIBRATOR TEST' : 'VIBRATOR TEST'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>

    </View>
    

    <View style={styles.horizontalLine} />

    
    <View style={styles.row}>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'CONTINUOS TEST' : 'CONTINUOS TEST'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'TEST ONCE' : 'TEST ONCE'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'ENABLE/DISABLE HEAD' : 'ENABLE/DISABLE HEAD'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'SELECT ALL HEAD' : 'SLECT ALL HEAD'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>

    </View>
    

     <View style={styles.row}>
    
        <View style={styles.box}>
               <Text style={styles.text1}>TEST LOAD CELL</Text>
               <View style={styles.row}>
                <View style={styles.subContainer2}>
                
                    
                    <TextInput style={styles.textInput4} keyboardType="numeric"  />
                </View>
                <View style={styles.subContainer2}>
                    
                <TextInput style={styles.textInput4} keyboardType="numeric"  />
                </View>
                <View style={styles.subContainer2}>
                    
                <TextInput style={styles.textInput4} keyboardType="numeric"  />
                </View>
                <View style={styles.subContainer2}>
                    
                <TextInput style={styles.textInput4} keyboardType="numeric"  />
                </View>
                </View>
         </View>
       
         <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/menu")}>
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
    marginTop:20
  },

  button: {
    height: windowHeight/7.4, // Set button height
    width: windowWidth/10, // Ensure the button takes the full width of the container
    backgroundColor: '#007BFF', // Set your button color
    borderRadius: 10, // Rounded corners
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    marginBottom: 10, // Spacing between buttons
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16, // Adjust font size as needed
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

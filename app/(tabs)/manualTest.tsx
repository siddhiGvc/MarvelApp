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
  const [isRunning1, setIsRunning1] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);
  const [isRunning3, setIsRunning3] = useState(false);

  const [isRunning4, setIsRunning4] = useState(false);
  const [isRunning5, setIsRunning5] = useState(false);
  const [isRunning6, setIsRunning6] = useState(false);
  const [isRunning7, setIsRunning7] = useState(false);

  const [isRunning8, setIsRunning8] = useState(false);
  const [isRunning9, setIsRunning9] = useState(false);
  const [isRunning10, setIsRunning10] = useState(false);
  const [isRunning11, setIsRunning11] = useState(false);

  const [isRunning12, setIsRunning12] = useState(false);
  const [isRunning13, setIsRunning13] = useState(false);
  const [isRunning14, setIsRunning14] = useState(false);
  const [isRunning15, setIsRunning15] = useState(false);

  const [isRunning16, setIsRunning16] = useState(false);
  const [isRunning17, setIsRunning17] = useState(false);
  const [isRunning18, setIsRunning18] = useState(false);
  const [isRunning19, setIsRunning19] = useState(false);

  




  const router=useRouter();

  

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
                    onPress={()=>setIsRunning(!isRunning)}
                    title={!isRunning ? 'HEAD1' : 'HEAD1'}
                    color={!isRunning ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning1(!isRunning1)}
                    title={!isRunning1 ? 'HEAD2' : 'HEAD2'}
                    color={!isRunning1 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={()=>setIsRunning2(!isRunning2)}
                    title={!isRunning2 ? 'HEAD3' : 'HEAD3'}
                    color={!isRunning2 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning3(!isRunning3)}
                    title={!isRunning3 ? 'HEAD4' : 'HEAD4'}
                    color={!isRunning3 ? '#007BFF' : 'green'}
                />
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning4(!isRunning4)}
                    title={!isRunning4 ? 'DUMP OFF' : 'DUMP ON'}
                    color={!isRunning4 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={()=>setIsRunning5(!isRunning5)}
                    title={!isRunning5 ? 'DUMP OFF' : 'DUMP ON'}
                    color={!isRunning5 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning6(!isRunning6)}
                    title={!isRunning6 ? 'DUMP OFF' : 'DUMP ON'}
                    color={!isRunning6 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning7(!isRunning7)}
                    title={!isRunning7 ? 'DUMP Off' : 'DUMP ON'}
                    color={!isRunning7 ? '#007BFF' : 'green'}
                />
        </View>
    </View>
    <View style={styles.row}>
    <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning8(!isRunning8)}
                    title={!isRunning8 ? 'BULK OFF' : 'BULK ON'}
                    color={!isRunning8 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={()=>setIsRunning9(!isRunning9)}
                    title={!isRunning9 ? 'BULK OFF' : 'BULK ON'}
                    color={!isRunning9 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning10(!isRunning10)}
                    title={!isRunning10 ? 'BULK OFF' : 'BULK ON'}
                    color={!isRunning10 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning11(!isRunning11)}
                    title={!isRunning11 ? 'BULK OFF' : 'BULK ON'}
                    color={!isRunning11 ? '#007BFF' : 'green'}
                />
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning12(!isRunning12)}
                    title={!isRunning12 ? 'VIBRATOR TEST' : 'VIBRATOR TEST'}
                    color={!isRunning12 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning13(!isRunning13)}
                    title={!isRunning13 ? 'VIBRATOR TEST' : 'VIBRATOR TEST'}
                    color={!isRunning13 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning14(!isRunning14)}
                    title={!isRunning14 ? 'VIBRATOR TEST' : 'VIBRATOR TEST'}
                    color={!isRunning14 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning15(!isRunning15)}
                    title={!isRunning15 ? 'VIBRATOR TEST' : 'VIBRATOR TEST'}
                    color={!isRunning15 ? '#007BFF' : 'green'}
                />
        </View>

    </View>
    

    <View style={styles.horizontalLine} />

    
    <View style={styles.row}>
        <View style={styles.subContainer1}>
               <Button
                    onPress={()=>setIsRunning16(!isRunning16)}
                    title={!isRunning16 ? 'CONTINUOS TEST' : 'CONTINUOS TEST'}
                    color={!isRunning16 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning17(!isRunning17)}
                    title={!isRunning17 ? 'TEST ONCE' : 'TEST ONCE'}
                    color={!isRunning17 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning18(!isRunning18)}
                    title={!isRunning18 ? 'ENABLE/DISABLE HEAD' : 'ENABLE/DISABLE HEAD'}
                    color={!isRunning18 ? '#007BFF' : 'green'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                     onPress={()=>setIsRunning19(!isRunning19)}
                    title={!isRunning19 ? 'SELECT ALL HEAD' : 'SLECT ALL HEAD'}
                    color={!isRunning19 ? '#007BFF' : 'green'}
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

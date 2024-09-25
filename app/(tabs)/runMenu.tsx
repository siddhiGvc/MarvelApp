import React,{useState} from 'react';
import { Image, StyleSheet, Platform ,View ,Dimensions,Text,TextInput,Button,TouchableOpacity} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { BarChart } from 'react-native-chart-kit';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RunScreen() {
  const [password,setPassword]=useState('');
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        data: [20, 15, 28 ,34],
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
            <Text style={styles.text1}>PGM</Text>
            <Text style={styles.text1}>SPEED</Text>
        </View>
        <View style={styles.subContainer1}>
            <TextInput style={styles.textInput1} keyboardType="numeric"  />
            <TextInput style={styles.textInput1} keyboardType="numeric" />
        </View>
        <View style={styles.subContainer1}>
        
        <TextInput style={styles.textInput2} keyboardType="default" placeholder="Enter New Value" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button 1 Pressed')}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button 2 Pressed')}>
          <Text style={styles.buttonText}>EXIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button 3 Pressed')}>
          <Text style={styles.buttonText}>AVC ON</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer1}>
            <TextInput style={styles.textInput3} keyboardType="numeric"  />
          
        </View>

    </View>





    <View style={styles.horizontalLine} />




    <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>CLOCK (Sec)</Text>
        </View>
        <View style={styles.subContainer1}>
            <TextInput style={styles.textInput1} keyboardType="numeric"  />
        </View>
        <View style={styles.subContainer2}>
        
        <Text style={styles.text1}>H1</Text>
      </View>
      <View style={styles.subContainer2}>
        
        <Text style={styles.text1}>H2</Text>
      </View>
      <View style={styles.subContainer2}>
        
        <Text style={styles.text1}>H3</Text>
      </View>
      <View style={styles.subContainer2}>
        
        <Text style={styles.text1}>H4</Text>
      </View>
     
   

    </View>



    <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>TARGET WEIGHT                          </Text>
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
        <View style={styles.subContainer2}>
            
        <TextInput style={styles.textInput4} keyboardType="numeric"  />
        </View>
     </View>



     <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>PREVIOUS WEIGHT                      </Text>
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
        <View style={styles.subContainer2}>
            
        <TextInput style={styles.textInput4} keyboardType="numeric"  />
        </View>
     </View>



     <View style={styles.row}>
       <View>
        <View style={styles.box}>
        <Text style={styles.text1}>TOTAL DUMP COUNT</Text>
        <TextInput style={styles.textInput1} keyboardType="numeric"  />
        </View>
        <View style={styles.box1}>
           <Text style={styles.resetText}>RESET COUNTER</Text>
        </View>
        </View>
        <View>
      <BarChart
        data={data}
        width={490}
        height={150}
        yAxisLabel="$"
        yAxisSuffix="" 
        chartConfig={{
          backgroundColor: 'green',  // Set chart background to transparent
          backgroundGradientFrom: 'green',  // Make gradient start transparent
          backgroundGradientTo: 'green',  // Make gradient end transparent
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        verticalLabelRotation={30}
      />
    </View>


     </View>



     <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>CURRENT WEIGHT                       </Text>
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
        <View style={styles.subContainer2}>
            
        <TextInput style={styles.textInput4} keyboardType="numeric"  />
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

  row: {
    
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
    // justifyContent: 'flex-start',
   
    
  },
  subContainer1: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:5
  },
  subContainer2: {
    flex: 1,
    justifyContent: 'flex-start',
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
    height: 25,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: 130, // Ensures inputs take full width of the container
    backgroundColor:'white'
  },
  textInput2: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: 200, // Ensures inputs take full width of the container
    backgroundColor:'pink'
  },
  textInput3: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: 100, // Ensures inputs take full width of the container
    backgroundColor:'white'
  },
  textInput4: {
    height: 24,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: 120, // Ensures inputs take full width of the container
    backgroundColor:'white'
  },
 
  
  buttonContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:5
  },

  button: {
    height: 50, // Set button height
    width: 75, // Ensure the button takes the full width of the container
    backgroundColor: '#007BFF', // Set your button color
    borderRadius: 4, // Rounded corners
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
    width:220,
    height:90,
    borderWidth:4,
    borderRadius:20,
    borderColor:'orange',
     alignItems:'center',
    justifyContent:'center'


  },

  box1:{
    width:220,
    height:50,
    backgroundColor:'red',
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

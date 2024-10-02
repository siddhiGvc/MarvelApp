import React,{useState} from 'react';
import { Image, StyleSheet, Platform ,View ,Dimensions,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import type {PropsWithChildren} from 'react';
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

export default function CalScreen() {
  const [flexDirection, setflexDirection] = useState('H1');
  const router=useRouter();

  return (
    <LinearGradient
    colors={['#008080', '#23B22E']}
    style={styles.container}
  >
   
    <View style={styles.subContainer1}>
        <Text style={styles.title}>CALIBRATION</Text>
    </View>
     


     <View style={styles.row}>
      
      
        
        {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button 1 Pressed')}>
          <Text style={styles.buttonText}>H1</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button 1 Pressed')}>
          <Text style={styles.buttonText}>H2</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button 1 Pressed')}>
          <Text style={styles.buttonText}>H3</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button 1 Pressed')}>
          <Text style={styles.buttonText}>H4</Text>
        </TouchableOpacity>
        </View> */}
         <PreviewLayout
            label=''
            values={['H1','H2','H3','H4','H5']}
            selectedValue={flexDirection}
            setSelectedValue={setflexDirection}>
            
            </PreviewLayout>

    </View>



    <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>EMPTY BUCKET AND PRESS                              </Text>
        </View>
       
            <View style={styles.subContainer1}>
            
            <TextInput style={styles.textInput4} keyboardType="default"  />
        </View>
       
     </View>



     <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>ENTER CALIBRATION WEIGHT                           </Text>
        </View>
       
            <View style={styles.subContainer1}>
            
            <TextInput style={styles.textInput4} keyboardType="default"  />
        </View>
        
     </View>
     

     <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>PLACE CALIBRATION WEIGHT AND PRESS    </Text>
        </View>
       
            <View style={styles.subContainer1}>
            
            <TextInput style={styles.textInput4} keyboardType="default"  />
        </View>
        
     </View>




     <View style={styles.horizontalLine} />



     <View style={styles.row}>
         <View style={styles.subContainer1}>
            <Text style={styles.text1}>STATUS                                             </Text>
        </View>
        <View style={styles.subContainer1}>
       
        <TextInput style={styles.textInput1} keyboardType="default"  />
        </View>
      </View>



    



     <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>CALLIBRATED WEIGHT                  </Text>
        </View>
       
            <View style={styles.subContainer1}>
            
            <TextInput style={styles.textInput1} keyboardType="numeric"  />
        </View>
      
     </View>

     <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/menu")}>
          <Text style={styles.buttonText}>EXIT</Text>
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
    alignItems:'center',
    justifyContent: 'center',
   
    
  },
  subContainer1: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5
  },
  subContainer2: {
    flex: 1,
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
    width:windowWidth/2, // Ensures inputs take full width of the container
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
    height: windowHeight/15,
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
    // marginTop:5
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
    fontSize: 16, // Adjust font size as needed
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
  }

 
});


type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  children?: React.ReactNode;
}>;

const PreviewLayout: React.FC<PreviewLayoutProps> = ({
  label,
  values,
  selectedValue,
  setSelectedValue,
  children,
}) => {
  const router = useRouter();

  return (

      <View style={styles1.row}>
        {values.map((value:any) => (
          <TouchableOpacity
            key={value}
            onPress={async() => {
              setSelectedValue(value);
          
            }}
            style={[
              styles1.button,
              selectedValue === value && styles1.selected,
            ]}
          >
            <Text
              style={[
                styles1.buttonLabel,
                selectedValue === value && styles1.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

  );
};

const styles1 = StyleSheet.create({
 
  box: {
    width: 50,
    height: 50,
  },         
  row: {
    width:windowWidth/1.3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    alignItems:'flex-start',
    marginBottom:7
  },
  button: {
    paddingHorizontal:-10,
    paddingVertical:15,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    marginHorizontal: '2.8%',
    marginBottom: 6,
    minWidth: '10%',
    textAlign: 'center',
    justifyContent:'center'
    
  },
  selected: {
    backgroundColor: 'purple',
    borderWidth: 0,
    textAlign:'center'
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: 'grey',
    textAlign:'center'
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

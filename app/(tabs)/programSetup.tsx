import React,{useState} from 'react';
import { Image, StyleSheet, Platform ,View ,Dimensions,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import type {PropsWithChildren} from 'react';
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

export default function RunScreen() {
  const [flexDirection, setflexDirection] = useState('');
  const [password,setPassword]=useState('');
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
    <View style={styles.rowConatiner}>
    <View >
        <View style={styles.row}>
            <View style={styles.subContainer1}>
                <Text style={styles.head}>H1</Text>
            </View>
            <View style={styles.subContainer1}>
                <Text style={styles.title}>PROGRAM SETUP</Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.row}>
                <Text style={styles.text1}>PROG. NO</Text>
                <TextInput style={styles.textInput1} keyboardType="numeric"  />
            </View>
            <View style={styles.row}>
                <Text style={styles.text1}>PROGRAM NAME</Text>
                <TextInput style={styles.textInput1} keyboardType="numeric"  />
            </View>
        </View>
    </View>
        <View>
           <View style={styles.row}>
                <Text style={styles.text1}>AUTOTARE</Text>
                <TextInput style={styles.textInput1} keyboardType="numeric"  />
            </View>
            <View style={styles.row}>
                <Text style={styles.text1}>REST WGT</Text>
                <TextInput style={styles.textInput1} keyboardType="numeric"  />
            </View>
            <View style={styles.row}>
                <Text style={styles.text1}>READY DELAY</Text>
                <TextInput style={styles.textInput1} keyboardType="numeric"  />
            </View>

        </View>
    </View>
    <View style={styles.row}>
       <View style={styles.subContainer1}>
            <Text style={styles.text1}>SELECT HEAD        </Text>
        </View>
        <PreviewLayout
            label=''
            values={['H1', 'H2','H3','H4']}
            selectedValue={flexDirection}
            setSelectedValue={setflexDirection}>
            
        </PreviewLayout>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>TGT. WGT                </Text>
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
   <View style={styles.subContainer2}>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>BULK FEED %    </Text>
        </View>
       
            <View style={styles.subContainer2}>
            
            <TextInput style={styles.textInput4} keyboardType="numeric"  />
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>MED FEED %     </Text>
        </View>
       
            <View style={styles.subContainer2}>
            
            <TextInput style={styles.textInput4} keyboardType="numeric"  />
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>FINE FEED %     </Text>
        </View>
       
            <View style={styles.subContainer2}>
            
            <TextInput style={styles.textInput4} keyboardType="numeric"  />
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.subContainer1}>
            <Text style={styles.text1}>S. FINE FEED %</Text>
        </View>
       
            <View style={styles.subContainer2}>
            
            <TextInput style={styles.textInput4} keyboardType="numeric"  />
        </View>
    </View>
    </View>
     {/* image */}
     <View style={styles.row}>
     <Image source={require('../../assets/pot.png')} style={styles.Image}/>
     <Image source={require('../../assets/motor.png')} style={styles.Image}/>
     </View>
    </View>

    <View style={styles.horizontalLine} />




     <View style={styles.row}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>SAVE & CURRENT HEAD</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>COPY TO ALL & SAVE</Text>
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
    padding:5
    // alignItems:'flex-start',
    
    
  },
  title:{
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color:'yellow'
  },
  head:{

    fontSize: 36,
    fontWeight: '400',
    marginBottom: 12,
    color:'red'

  },


  row: {
    
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'flex-start'
    // justifyContent: 'flex-start',
   
    
  },
  Image:{
    width:windowWidth/4,
    height:windowHeight/2.8,
    resizeMode:'contain'
  },
  
  rowConatiner: {
    
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'flex-start'
    // justifyContent: 'flex-start',
   
    
  },
  subContainer1: {
    //  flex: 1,
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
    marginTop:5
  },

  button: {
    height: windowHeight/9.4, // Set button height
    width: windowWidth/10, // Ensure the button takes the full width of the container
    backgroundColor: '#007BFF', // Set your button color
    borderRadius: 10, // Rounded corners
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    marginBottom: 10, // Spacing between buttons
  },
  button1: {
    height: windowHeight/9.4, // Set button height
    width: windowWidth/3.5, // Ensure the button takes the full width of the container
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
    height: 3,
    backgroundColor: 'yellow',  // Change color as needed
    width: '100%',
    marginVertical: 0.5,  // Optional: for spacing
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
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:'space-around'
    },
    button: {
      paddingHorizontal:-10,
      paddingVertical:1,
      borderRadius: 10,
      backgroundColor: '#D3D3D3',
      alignSelf: 'center',
      marginHorizontal: '2.6%',
      marginBottom: 6,
      minWidth: '15%',
      textAlign: 'center',
      justifyContent:'center'
      
    },
    selected: {
      backgroundColor: 'orange',
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
      color: 'red',
    },
    label: {
      textAlign: 'center',
      marginBottom: 10,
      fontSize: 24,
    },
  });
  
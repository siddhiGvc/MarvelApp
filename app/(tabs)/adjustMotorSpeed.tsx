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

export default function AdjustMotorSpeedScreen() {
  const [password,setPassword]=useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [flexDirection, setflexDirection] = useState('1');

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
        <Text style={styles.title}>ADJUST MOTOR SPEED</Text>
    </View>
    <View style={styles.row}>
        <View style={styles.box}>
            <View style={styles.row1}>
            <Text style={styles.text}>CURRENT PROGRAM NUMBER : </Text>
            <TextInput style={styles.textInput} keyboardType='numeric'/>
            </View>
            <View style={styles.row1}>
            <Text style={styles.text}> 1-SLOWEST</Text>
            <Text style={styles.text}> 5-FASTEST</Text>
            </View>
       <PreviewLayout
            label=''
            values={['1','2','3','4','5']}
            selectedValue={flexDirection}
            setSelectedValue={setflexDirection}>
            
            </PreviewLayout>
       </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>SAVE & CLOSE</Text>
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
    width:windowWidth,
    height:windowHeight/1.5,
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems:'center',
    marginTop:10

   
    
  },
  row1: {
    width:'50%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10

   
    
  },
  subContainer1: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:5
  },
  button: {
    height: windowHeight/7.4, // Set button height
    width: windowWidth/4, // Ensure the button takes the full width of the container
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
  box:{
    width:windowWidth/1.2,
    height:windowHeight/2,
    borderWidth:4,
    borderRadius:20,
    borderColor:'orange',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10


  },
  text:{
    color:'white',
    fontSize:16,
    fontWeight:'400'
  },
  textInput:{
    backgroundColor:'white',
    width:windowWidth/5,
    height:windowHeight/7,
    borderRadius:5,
    textAlign:'center',
    fontSize:20
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


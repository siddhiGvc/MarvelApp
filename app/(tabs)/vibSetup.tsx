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

export default function VibSetupScreen() {
  const [flexDirection, setflexDirection] = useState('H1');
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
    <View style={styles.header}>
            <Text style={styles.title}>VIBRATOR SETUP</Text>
    </View>

    <View style={styles.row}>
         <View style={styles.subContainer1}>
            <View style={styles.menu1}>
            <Text style={styles.menuText}>BULK</Text>
            </View>
            <View style={styles.menu2}>
            <Text style={styles.menuText}>MED</Text>
            </View>
            <View style={styles.menu3}>
            <Text style={styles.menuText}>FINE</Text>
            </View>
            <View style={styles.menu4}>
            <Text style={styles.menuText}>S.FINE</Text>
            </View>
         </View>
         <View style={styles.subContainer2}>
            <View style={styles.head}>
            <Text style={styles.menuText}>H1</Text>
            </View>
            <View style={styles.row1}>
              <Text style={styles.menuText}>FRONT</Text>
              <Text style={styles.menuText}>REAR</Text>
            </View>
            <View style={styles.row1}>
                <View style={styles.input1}>
                <TextInput style={styles.textInput} autoFocus keyboardType="numeric"  />
                </View>
                <View style={styles.input1}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input2}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input2}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input3}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input3}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input4}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input4}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
           
         </View>
         <View style={styles.subContainer2}>
         <View style={styles.head}>
            <Text style={styles.menuText}>H2</Text>
            </View>
            <View style={styles.row1}>
              <Text style={styles.menuText}>FRONT</Text>
              <Text style={styles.menuText}>REAR</Text>
            </View>
            <View style={styles.row1}>
                <View style={styles.input1}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input1}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input2}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input2}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input3}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input3}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input4}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input4}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
         </View>
         <View style={styles.subContainer2}>
             <View style={styles.head}>
            <Text style={styles.menuText}>H3</Text>
            </View>
            <View style={styles.row1}>
              <Text style={styles.menuText}>FRONT</Text>
              <Text style={styles.menuText}>REAR</Text>
            </View>
            <View style={styles.row1}>
                <View style={styles.input1}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input1}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input2}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input2}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input3}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input3}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input4}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input4}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
         </View>
         <View style={styles.subContainer2}>
             <View style={styles.head}>
            <Text style={styles.menuText}>H4</Text>
            </View>
            <View style={styles.row1}>
              <Text style={styles.menuText}>FRONT</Text>
              <Text style={styles.menuText}>REAR</Text>
            </View>
            <View style={styles.row1}>
                <View style={styles.input1}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input1}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input2}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input2}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input3}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input3}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
            <View style={styles.row1}>
                <View style={styles.input4}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
                <View style={styles.input4}>
                <TextInput style={styles.textInput} keyboardType="numeric"  />
                </View>
            </View>
         </View>
          
    </View>
    <View style={styles.subContainer3}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>SAVE DATA & EXIT</Text>
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
    padding:5
    // alignItems:'flex-start',
    
    
  },
  row: {
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  row1: {
    width:'100%',
    height:windowHeight/8,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  header: {
    //  flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:5
  },
  title:{
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'yellow'
  },
  subContainer1:{
    width:windowWidth/7,
    height:windowHeight/1.42,
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'center',
    
  },
  subContainer2:{
    width:windowWidth/4.8,
    height:windowHeight/1.40,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'white',
    borderRadius:20
    
  },
  subContainer3:{
    width:'100%',
    height:windowHeight/5.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  },
  menu1:{
    
    backgroundColor:'green',
    width:windowWidth/8,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:'4.2%'
  },
  menu2:{
    backgroundColor:'orange',
    width:windowWidth/8,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:'4.2%'
  },
  menu3:{
    backgroundColor:'brown',
    width:windowWidth/8,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:'4.2%'
  },
  menu4:{
    backgroundColor:'red',
    width:windowWidth/8,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:'4.2%'
  },
 menuText:{
    color:'white',
    fontSize:16,
    fontWeight:'500'
 },
 button: {
    height: windowHeight/10.4, // Set button height
    width: windowWidth/4, // Ensure the button takes the full width of the container
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
  head:{
    width:windowWidth/12,
    backgroundColor:'purple',
    height:windowHeight/15,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
    
  },
  input1:{
    backgroundColor:'green',
    width:windowWidth/10.2,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'space-around',
    borderRadius:10,
    color:'white'

  },
  input2:{
    backgroundColor:'orange',
    width:windowWidth/10.2,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'space-around',
    borderRadius:10,
  },
  input3:{
    backgroundColor:'brown',
    width:windowWidth/10.2,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'space-around',
    borderRadius:10,

  },
  input4:{
    backgroundColor:'red',
    width:windowWidth/10.2,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'space-around',
    borderRadius:10,

  },
  textInput:{
    color:'white',
    textAlign:'center'
  },


 
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
      alignItems:'flex-start'
    },
    button: {
      paddingHorizontal:-10,
      paddingVertical:1,
      borderRadius: 10,
      backgroundColor: '#D3D3D3',
      alignSelf: 'center',
      marginHorizontal: '2.8%',
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
  
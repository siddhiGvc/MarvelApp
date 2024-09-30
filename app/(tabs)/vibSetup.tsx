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
            <Text style={styles.menuText}>MADE</Text>
            </View>
            <View style={styles.menu3}>
            <Text style={styles.menuText}>FINE</Text>
            </View>
            <View style={styles.menu4}>
            <Text style={styles.menuText}>S.FINE</Text>
            </View>
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
  row: {
    width:windowWidth/1.3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    alignItems:'flex-start'
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
    marginBottom: 12,
    color:'yellow'
  },
  subContainer1:{
    width:windowWidth/5,
    height:windowHeight/1.42,
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'center',
    
  },
  menu1:{
    
    backgroundColor:'green',
    width:windowWidth/6,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:'2%'
  },
  menu2:{
    backgroundColor:'orange',
    width:windowWidth/6,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:'2%'
  },
  menu3:{
    backgroundColor:'brown',
    width:windowWidth/6,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:'2%'
  },
  menu4:{
    backgroundColor:'red',
    width:windowWidth/6,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:'2%'
  },
 menuText:{
    color:'white',
    fontSize:16,
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
  
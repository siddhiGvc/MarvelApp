import React,{useEffect, useState} from 'react';
import { Image, StyleSheet, Platform ,View ,Dimensions,Text,TextInput,TouchableOpacity,FlatList} from 'react-native';
// import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import {useRouter,Href} from 'expo-router'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';




// import { View } from 'react-native-reanimated/lib/typescript/Animated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    { id: '1', name: 'John Doe', age: 28, city: 'New York' },
    { id: '2', name: 'Jane Smith', age: 32, city: 'Los Angeles' },
    { id: '3', name: 'Michael Johnson', age: 35, city: 'Chicago' },
    { id: '4', name: 'Sarah Williams', age: 25, city: 'Miami' },
    { id: '5', name: 'Sarah Williams', age: 25, city: 'Miami' },
    { id: '6', name: 'Sarah Williams', age: 25, city: 'Miami' },
  ];

export default function UsersScreen() {
  const [password,setPassword]=useState('');

  const router=useRouter();


  const renderItem = ({ item }:any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.age}</Text>
      <Text style={styles.cell}>{item.city}</Text>
    </View>
  );

 
  return (
    <LinearGradient
    colors={['#008080', '#23B22E']}
    style={styles.container}
  >
        <View style={styles.subContainer1}>
        <Text style={styles.title}>USER PREVILEGE</Text>
      </View>
      <View style={styles.row1}>
       <View style={styles.tableContainer}>
      {/* Table Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sr.No</Text>
        <Text style={styles.headerText}>User Name</Text>
        <Text style={styles.headerText}>User Previlege</Text>
        <Text style={styles.headerText}>Automatic Logout Time</Text>
      </View>
      
      {/* Table Rows */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
      <View style={styles.subContainer2}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>ADD USER PREVILEGE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>DELETE USER PREVILEGE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>CHANGE PASSORD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>QUIT</Text>
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
    flex: 1,
    flexDirection:'column',
    justifyContent:'space-around',
    textAlign:'center',
    alignItems:'center',
    
    
  },
  tableContainer: {
    width:windowWidth/1.5,
    height:windowHeight/1.3,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius:10,
    marginHorizontal:'2%'
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  row1: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent:'space-evenly'
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  title:{
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color:'yellow'
  },

  subContainer1: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:5
  },
  subContainer2: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:5,
    
  },
  button: {
    height: windowHeight/7, // Set button height
    width: windowWidth/4, // Ensure the button takes the full width of the container
    backgroundColor: '#007BFF', // Set your button color
    borderRadius: 10, // Rounded corners
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    marginBottom: 5, // Spacing between buttons
    marginVertical:'4%'
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16, // Adjust font size as needed
    fontWeight:'500'
  },
 
});

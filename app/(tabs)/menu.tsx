import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function MenuScreen(){
  const menuItems = [
    { title: 'RUN', image: require('../../assets/menu1.png') },
    { title: 'MANUAL TEST', image: require('../../assets/menu2.jpg') },
    { title: 'PROGRAM SETUP', image: require('../../assets/menu3.png') },
    { title: 'CALIBRATION', image: require('../../assets/menu4.jpg') },
    { title: 'AVC ON', image: require('../../assets/menu5.png') },
    { title: 'FIXED', image: require('../../assets/menu6.png') },
    { title: 'HOME', image: require('../../assets/menu7.png') },
    { title: 'EMPTY BUCKET', image: require('../../assets/menu8.png') },
    { title: 'EMPTY MACHINE', image: require('../../assets/menu9.jpg') },
  ];

  return (
    <LinearGradient
    colors={['#008080', '#23B22E']}
    style={styles.container}
  >
    
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => alert(`${item.title} clicked`)}
        >
          <Image source={item.image} style={styles.menuImage} />
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 10,
    backgroundColor:'black'
  },
  menuItem: {
    width: 215,
    height: 90,
    margin: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  menuImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


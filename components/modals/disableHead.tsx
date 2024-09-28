import React, { useState } from 'react';
import { Modal, Text, View, Button, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import type {PropsWithChildren} from 'react';
import {useRouter,Href} from 'expo-router';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DisableHeadWindow({modalVisible,setModalVisible}:any) {
    const [isRunning, setIsRunning] = useState(true);

  const toggleMachine = () => {
    setIsRunning(!isRunning);
    // Send command to machine backend here (via HTTP request or WebSocket)
  };

  const [flexDirection, setflexDirection] = useState('0');

  return (
    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>PRESS ANY HEAD TO DISABLE AND ENABLE</Text>
            <View style={styles.row}>
        <View style={styles.subContainer1}>
                <Button
                    onPress={toggleMachine}
                    title={isRunning ? 'HEAD 1 ENABLE' : 'HEAD 1 DISABLE'}
                    color={isRunning ? '#007BFF' : 'grey'}
                />
        </View>
        <View style={styles.subContainer1}>
              <Button
                    onPress={toggleMachine}
                    title={isRunning ? 'HEAD 2 ENABLE' : 'HEAD 2 DISABLE'}
                    color={isRunning ? '#007BFF' : 'grey'}
                />
        </View>
        <View style={styles.subContainer1}>
                <Button
                    onPress={toggleMachine}
                    title={isRunning ? 'HEAD 3 ENABLE' : 'HEAD 3 DISABLE'}
                    color={isRunning ? '#007BFF' : 'grey'}
                />
        </View>
        <View style={styles.subContainer1}>
               <Button
                    onPress={toggleMachine}
                    title={isRunning ? 'HEAD 4 ENABLE' : 'HEAD 4 DISABLE'}
                    color={isRunning ? '#007BFF' : 'grey'}
                />
        </View>

    </View>
           
            <Button
              title="Close"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:windowWidth,
    height:windowHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:5
   
   
    
  },
  subContainer1: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:5
  },
  openButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    width:windowWidth,
    height:windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // For the transparent background
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize:20,
    fontWeight:'500',
    marginBottom: 15,
    textAlign: 'center',
    width:windowWidth/2.5
  },
});


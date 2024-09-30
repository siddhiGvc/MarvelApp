import React, { useState } from 'react';
import { Modal, Text, View, Button, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ConfirmLearnWindow({modalVisible,setModalVisible}:any) {

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
            <View style={styles.row}>
                <Button
                title="  YES  "
                onPress={() => setModalVisible(false)}
                color={'green'}
                />
                 <Button
                title="  NO  "
                onPress={() => setModalVisible(false)}
                color={'red'}
                />

            </View>
         
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
  row:{
    width:windowWidth/5,
    flexDirection:'row',
    justifyContent:'space-between'

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

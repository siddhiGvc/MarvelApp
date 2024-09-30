import React, { useState } from 'react';
import { Modal, Text, View, Button, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UpdateProjectWindow({modalVisible,setModalVisible}:any) {

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
          <View style={styles.modalHeader}>
              <Text style={styles.headerText}>UPDATE PROJECT</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.modalText}>U disk inserted into the detection, whether to update ?</Text>
            <View style={styles.row}>
                <View style={styles.subContainer1}>
                <Button
                title="Update Recipe"
                onPress={() => setModalVisible(false)}
                />
             </View>
             <View style={styles.subContainer1}>
                <Button
                title="Close"
                onPress={() => setModalVisible(false)}
                />
             </View>

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
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'stretch',
    
  },
  subContainer1: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:5,
    marginHorizontal:'2%'
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
  modalHeader: {
    width: '70%',
    padding: 5,
    backgroundColor: '#f2f2f2',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#ff5c5c',
    padding: 10,
    borderRadius: 50,
  },
});

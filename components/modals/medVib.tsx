import React, { useState } from 'react';
import { Modal, Text, View, Button, StyleSheet, TouchableOpacity,Dimensions ,TextInput} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BulkVibWindow({modalVisible,setModalVisible}:any) {

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
              <Text style={styles.headerText}>MED VIB AMP</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.subContainer1}>
                    <View style={styles.menu}>
                    <Text style={styles.heading}>FRONT VIB AMP</Text>
                    </View>
                    <View style={styles.menu}>
                    <Text style={styles.heading}>REAR VIB AMP</Text>
                    </View>
                </View>
                <View style={styles.subContainer2}>
                    <View style={styles.head}>
                    <Text style={styles.menuText}>H1</Text>
                    </View>
                    <View style={styles.input}>
                     <TextInput style={styles.textInput} keyboardType='numeric'></TextInput>
                    </View>
                    <View style={styles.input}>
                     <TextInput style={styles.textInput} keyboardType='numeric'></TextInput>
                    </View>
                    
                </View>
                <View style={styles.subContainer2}>
                <View style={styles.head}>
                    <Text style={styles.menuText}>H2</Text>
                    </View>
                    <View style={styles.input}>
                     <TextInput style={styles.textInput} keyboardType='numeric'></TextInput>
                    </View>
                    <View style={styles.input}>
                     <TextInput style={styles.textInput} keyboardType='numeric'></TextInput>
                    </View>
                   
                </View>
                <View style={styles.subContainer2}>
                <View style={styles.head}>
                    <Text style={styles.menuText}>H3</Text>
                    </View>
                    <View style={styles.input}>
                     <TextInput style={styles.textInput} keyboardType='numeric'></TextInput>
                    </View>
                    <View style={styles.input}>
                     <TextInput style={styles.textInput} keyboardType='numeric'></TextInput>
                    </View>
                   
                </View>
                <View style={styles.subContainer2}>
                <View style={styles.head}>
                    <Text style={styles.menuText}>H4</Text>
                    </View>
                    <View style={styles.input}>
                     <TextInput style={styles.textInput} keyboardType='numeric'></TextInput>
                    </View>
                    <View style={styles.input}>
                     <TextInput style={styles.textInput} keyboardType='numeric'></TextInput>
                    </View>
                   
                </View>

            </View>

            
            <View style={styles.row}>
               <Button
                title="COPY"
                onPress={() => setModalVisible(false)}
                />
                <Button
                title="CLOSE"
                onPress={() => setModalVisible(false)}
                />
                <Button
                title="SAVE CURRENT HEAD & CLOSE"
                onPress={() => setModalVisible(false)}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:10
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
    paddingBottom:40
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
    width: '100%',
    height:'15%',
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
    padding: 5,
    borderRadius: 50,
  },
  row: {
    width:'60%',
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
    width:windowWidth/5,
    height:windowHeight/2,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
   
    
  },
  subContainer2:{
    width:windowWidth/6,
    height:windowHeight/2,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'blue',
    borderRadius:5,
    marginBottom:5,
    marginHorizontal:'2%'
   
  },
  subContainer3:{
    width:'100%',
    height:windowHeight/5.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
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
  input:{
 
    width:windowWidth/10.2,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'space-around',
    borderRadius:10,
    color:'white',
    borderWidth:1,
    borderColor:'black',
    marginVertical:'9%'

  },
  menu:{
 
    width:windowWidth/5.2,
    height:windowHeight/10,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    color:'white',
    marginVertical:'1%',
    marginTop:20

  },
  heading:{
    fontSize:18,
  },
  
  textInput:{
    color:'black',
    textAlign:'center',
    marginVertical:'9%'
   
  },
});

import React, { useState } from 'react';
import { Modal, Text, View, Button, StyleSheet, TouchableOpacity,Dimensions,ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importing icons
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SetuPrivelegeWindow({modalVisible,setModalVisible}:any) {

    const [checkboxes, setCheckboxes] = useState(
        Array(100).fill(false) // Initialize an array of 30 false values
      );
      const [currentPage, setCurrentPage] = useState(0); // For pagination

      const checkboxesPerPage = 16; // 4 rows x 4 checkboxes per row = 16 checkboxes per page

      const toggleCheckbox = (index:any) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index] = !updatedCheckboxes[index];
        setCheckboxes(updatedCheckboxes);
      };

      const startIndex = currentPage * checkboxesPerPage;
     const currentCheckboxes = checkboxes.slice(startIndex, startIndex + checkboxesPerPage);


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
          <Text style={styles.modalTitle}>SETUP PREVILEGE</Text>
             <ScrollView>
             <View style={styles.checkboxGrid}>
          {currentCheckboxes.map((isChecked, index) => (
            <View key={startIndex + index} style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => toggleCheckbox(startIndex + index)}
              >
                {isChecked && <MaterialIcons name="check" size={17} color="blue" />}
              </TouchableOpacity>
              <Text style={styles.label}>{startIndex + index + 1}</Text>
            </View>
          ))}
        </View>
              </ScrollView>
              <View style={styles.pagination}>
                <Button
                title="Previous"
                onPress={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 0} // Disable "Previous" on the first page
                />
                <Button
                title="Next"
                onPress={() => setCurrentPage(currentPage + 1)}
                disabled={startIndex + checkboxesPerPage >= checkboxes.length} // Disable "Next" on the last page
                />
            </View>
            <View style={styles.pagination}>
            <Button
              title="  Close  "
              onPress={() => setModalVisible(false)}
            />
            <Button
              title="  OK  "
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
    height:windowHeight/3,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxGrid: {
    width:windowWidth/2,
    height:windowHeight/3,
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows checkboxes to wrap to the next line
    justifyContent: 'space-between', // Evenly distribute checkboxes
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  container1: {
    width:windowWidth/2,
    height:windowHeight,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow wrapping of checkboxes to next line
    justifyContent: 'space-between', // Space between checkboxes
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
    height:windowHeight/1.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // For the transparent background
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
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
  checkboxContainer: {
    width: '23%', // Each checkbox takes up 23% of the width (with margin for spacing)
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: '#007AFF',
  },
  label: {
    fontSize: 16,
  },
  pagination: {
    width:windowWidth/3,
    height:windowHeight/10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

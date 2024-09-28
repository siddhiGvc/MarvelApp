import React, { useState } from 'react';
import { Modal, Text, View, Button, StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import type {PropsWithChildren} from 'react';
import {useRouter,Href} from 'expo-router';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DecimalAdjustWindow({modalVisible,setModalVisible}:any) {
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
            <Text style={styles.modalText}>ADJUST DECIMAL POSITION</Text>
            <PreviewLayout
            label=''
            values={['0', '1','2','3','4']}
            selectedValue={flexDirection}
            setSelectedValue={setflexDirection}>
            
            </PreviewLayout>
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
      paddingVertical:4,
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

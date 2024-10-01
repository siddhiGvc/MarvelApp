import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableOpacity ,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AddUserWindow({modalVisible,setModalVisible}:any) {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        setModalVisible(false); // Close the modal after login
      };
    

  return (
    <View style={styles.container}>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Android back button close
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>ADD USER PREVILEGE</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
             <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.buttonRow1}>
                <TextInput
                style={styles.input1}
                placeholder="Logout Time"
                value={username}
                onChangeText={setUsername}
                />
                <Button title="SETUP PREVILEGE" onPress={handleLogin} color="orange" />
            </View>
            <View style={styles.buttonRow}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
              <Button title="ADD USER" onPress={handleLogin} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalView: {
        width: '60%',
        height:windowHeight/1.3,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 6,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      input: {
        width: '80%',
        height: windowHeight/10.5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
      },
      input1: {
        width: '40%',
        height: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        marginLeft:'0.4%',
        marginHorizontal:'8%'
      },
      buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
      },
      buttonRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: windowHeight/10.5,
        marginBottom:8
      },
});
import React,{useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions ,Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter ,Href} from 'expo-router';
import ErrorWindow from '@/components/modals/error';
import UpdateProjectWindow from '@/components/modals/updateProject';
import DecimalAdjustWindow from '@/components/modals/decimalAdjust';
import DisableHeadWindow from '@/components/modals/disableHead';
import BulkVibWindow from '@/components/modals/bulkVib';
import ConfirmLearnWindow from '@/components/modals/confirmLearn';
import LoginWindow from '@/components/modals/login';
import AddUserWindow from '@/components/modals/addUser';
import DeleteUserWindow from '@/components/modals/delteUser';
import ChangePasswordWindow from '@/components/modals/changePassword';
import SetuPrivelegeWindow from '@/components/modals/setupPrevilege';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function MenuScreen(){
  const [modalVisible, setModalVisible] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const router=useRouter();

  const toggleMachine = () => {
    setIsRunning(!isRunning);
    // Send command to machine backend here (via HTTP request or WebSocket)
  };

  const menuItems = [
    { title: 'RUN', image: require('../../assets/menu1.png') ,path:'/runMenu'},
    { title: 'MANUAL TEST', image: require('../../assets/menu2.png') ,path:'/manualTest'},
    { title: 'PROGRAM SETUP', image: require('../../assets/menu3.png'),path:'/vibratorAdjust' },
    { title: 'CALIBRATION', image: require('../../assets/menu4.jpg') ,path:'/calMenu'},
    { title: 'HOME', image: require('../../assets/menu7.png') ,path:'/'},
    { title: 'EMPTY BUCKET', image: require('../../assets/menu8.png')},
    { title: 'EMPTY MACHINE', image: require('../../assets/menu9.jpg') ,path:'/vibratorHead'},
  ];
 

  return (
    <>
    <LinearGradient
    colors={['#008080', '#23B22E']}
    style={styles.container}
  >
    
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() =>item.title =='EMPTY BUCKET' ? setModalVisible(true) :router.push(`${item.path}` as Href)}
         
        >
          <Image source={item.image} style={styles.menuImage} />
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
         <TouchableOpacity
        
          style={{
            width: windowWidth/3.21,
            height: windowHeight/3.45,
            margin: 5,
            backgroundColor: !isRunning ? 'black' : 'green',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            padding:2
          }}
          onPress={toggleMachine}
        
         
        >
          <Image source={require('../../assets/menu5.png') } style={styles.menuImage} />
          <Text style={styles.menuText}>AVC ON</Text>
             {/* <Button
                    onPress={toggleMachine}
                    title={!isRunning ? 'AVC OFF' : 'AVC ON'}
                    color={!isRunning ? '#black' : 'green'}
              /> */}
        </TouchableOpacity>
        <TouchableOpacity
           style={{
            width: windowWidth/3.21,
            height: windowHeight/3.45,
            margin: 5,
            backgroundColor: !isRunning ? 'black' : 'green',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            padding:2
          }}
          onPress={toggleMachine}
         
        >
          <Image source={require('../../assets/menu6.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>{!isRunning ? 'FIXED' : 'LEARN'}</Text>
        </TouchableOpacity>
       
    
    </LinearGradient>
     {/* <ErrorWindow modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
     {/* <UpdateProjectWindow modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
     {/* <DecimalAdjustWindow modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
     {/* <DisableHeadWindow modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
     {/* <BulkVibWindow modalVisible={modalVisible} setModalVisible={setModalVisible}/>  */}
     {/* <ConfirmLearnWindow modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
     {/* <LoginWindow  modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
     {/* <AddUserWindow  modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
     {/* <DeleteUserWindow  modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
     {/* <ChangePasswordWindow  modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
     <SetuPrivelegeWindow  modalVisible={modalVisible} setModalVisible={setModalVisible}/>
     </>
  );
};

const styles = StyleSheet.create({
  container: {
    
    width: windowWidth,
    height: windowHeight,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor:'black'
  },
  menuItem: {
    width: windowWidth/3.21,
    height: windowHeight/3.45,
    margin: 5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding:2
  },
  menuImage: {
    width: windowWidth/16,
    height:windowHeight/8,
    marginBottom: 5,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


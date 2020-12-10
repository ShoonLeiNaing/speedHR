import  React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity,TouchableWithoutFeedback, Alert,Modal,TouchableHighlight, Keyboard, ActivityIndicator} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import {taskStyles} from '../styles'
import { Feather } from '@expo/vector-icons'; 
import TaskForm from './TaskForm';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'
import NetInfo,{useNetInfo} from "@react-native-community/netinfo";
import { AsyncStorage } from 'react-native';


export default function Newsfeed({navigation}) {
    
    const [postText,setPostText]=useState("")
    const workspaceId=1
    const URL="https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/newsfeed/1"
    const [modalVisible, setModalVisible] = useState(false);
    const[isLoading,setLoading]=useState(true)
    const[data,setData]=useState([])
    const[asyncstorage,setAsyncstorage]=useState([])
    const[connection,setConnection]=useState()

    const saveData=async()=>{
        AsyncStorage.setItem('data',postText)
      }

      const displayData=async()=>{
        try{
          let obj = await AsyncStorage.getItem('data');
          if(obj!=null){
            console.log(obj)
            axios.post(`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/newsfeed/${workspaceId}`, {
                workerId:'12',
                data: obj
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            AsyncStorage.clear()

          }
          
          
        }
        catch(error){
          alert(error)
        }
      }

    // useEffect(()=>{
    //     NetInfo.fetch().then(state => {      
    //         setConnection(state.isConnected)       
    //     });
    //     displayData()
    // },[])
    
    useEffect(()=>{
        axios.get(URL)
        .then(function (response) {
            setData(response.data) 
        })
        .catch(function (error) {
           console.log(error);
        });
    },[])
  
   const postSubmit=()=>{
    NetInfo.fetch("wifi").then(state => {      
        setConnection(state.isConnected)       
    });

    if(connection){
        axios.post(`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/newsfeed/${workspaceId}`, {
            workerId:'12',
            data: postText
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          setModalVisible(false)
    }else{
        
        saveData()
        // setAsyncstorage({workerId:'12',data:postText})
        // console.log(asyncstorage)
    }

    
    

    
   }
    return (
        
        <View style={styles.container}>
            
            <Modal animationType="slide" visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed.")}} >  
            <View style={postStyles.modalView}>
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    <View style={postStyles.postForm}>
                        <View style={postStyles.header}>
                            <View style={postStyles.headerIcon}>
                                <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} >
                                    <Entypo name="circle-with-cross" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={postStyles.headerTitle}>
                                <Text style={{fontSize:20,marginLeft:10}}>Write your opinion</Text>
                            </View>
                        
                        </View>    
                        <View style={postStyles.postTextInput}>
                            <TextInput style={{fontSize:15}}  placeholder="Write Post" onChangeText={(postText)=>setPostText(postText)} />
                        </View>
                        <View style={postStyles.postTextButton}>
                            <Button  title="Add Post" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton} onPress={postSubmit}/>
                        </View> 
                    </View> 
                </TouchableWithoutFeedback>           
            </View>
      </Modal>
      
            <TouchableOpacity onPress={()=>setModalVisible(true)}>
            <View style={postStyles.addPost}>   
                <Ionicons name="ios-add-circle-outline" size={30} color="black" style={{marginBottom:10}} />
                <Text style={{marginLeft:15,marginBottom:10}}>Add new post</Text>
            </View>
            </TouchableOpacity>
            
            <View style={postStyles.postForm}>
                <FlatList style={{flex:1}} data={data} keyExtractor={(item)=>item.postId} renderItem={({item})=>(
                    <View style={postStyles.postContainer}>
                        <View style={postStyles.postHeaderContainer}>
                            <View style={postStyles.employeeProfilePic}>
                                <Image source={require('../assets/pic.jpg')} style={{height:40,width:40,alignSelf:'center'}} />
                            </View>
                            <View style={postStyles.employeeProfileName}>
                                <Text style={{marginLeft:10}}>{item.workerId}</Text>
                            </View>
                            <View style={postStyles.postDate}>
                                <Text style={{fontSize:10}}>{item.Postdate}</Text>
                            </View>
                        </View>
                        <View style={postStyles.textContainer}>
                            <Text style={{fontSize:15}}>{item.data}</Text>
                        </View>
                        <View style={postStyles.buttonContainer}>
                            <Button onPress={()=>navigation.navigate('Comments',item)} title="Comment" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton}/>
                        </View>
                    </View>
                )} />           
            </View>
            
        </View>
 
    )
}

export const postStyles = StyleSheet.create({
    postForm:{
        backgroundColor:'white',
        padding:2,
        flex:1
    },
    postContainer:{
        flex:1,
        height:'100%',
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        padding:10
    },
    postHeaderContainer:{
        flexDirection:'row',
        flex:1
    },
    employeeProfilePic:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    employeeProfileName:{
        flex:1.8,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    postDate:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer:{
        flex:3,
        padding:10,
        marginTop:10

    },
    buttonContainer:{
        flex:1,
        paddingVertical:12,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    addPost:{
        flexDirection:'row',
        alignItems:'center'
    },  
    modalView: {
        flex:1,
        shadowColor: "#000",
        backgroundColor:'#BEE9E4'  ,
        padding:20,
        paddingVertical:40
      },
    postForm:{
        flex:1,
        backgroundColor: "white",
        padding:15,
    },
    postTextInput:{
        marginVertical:20,
        borderRadius:20,
        borderColor:'#016064',
        borderWidth:1,
        height:'30%',
        padding:10

    },
    header :{
        flexDirection:'row',
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
    },
    headerIcon:{
        flex:1
    },
    headerTitle:{
        flex:4,
        justifyContent:'center',
        marginBottom:20,
    },
    postTextButton:{
        alignItems:'flex-end',
        marginVertical:30
    } 
})

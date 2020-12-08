import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity,TouchableWithoutFeedback, Alert,Modal,TouchableHighlight, Keyboard} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import {taskStyles} from '../styles'
import {employeeHomeStyles} from '../employeeStyles'
import { Feather } from '@expo/vector-icons'; 
import TaskForm from '../screens/TaskForm'
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'

export default function EmployeeNewsfeed({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [postText,setPostText]=useState({})
    const workspaceId=1
    const URL="https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/newsfeed/1"
    const[isLoading,setLoading]=useState(true)
    const[data,setData]=useState([])
    
    useEffect(()=>{
        axios.get(URL)
        .then(function (response) {
            setData(response.data) 
        })
        .catch(function (error) {
            alert(error);
        });
    },[])
   
    const postSubmit=()=>{
        axios.post(`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/newsfeed/${workspaceId}`, {
            workerId:'12',
            data: postText
          })
          .then(function (response) {
            console.log(response);
            setModalVisible(false)
          })
          .catch(function (error) {
            console.log(error);
          });
       }
    
    return (
        
        <View style={employeeHomeStyles.container}>
            <Modal animationType="slide" visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed.")}} >  
            <View style={employeeHomeStyles.modalView}>
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    <View style={postStyles.postForm}>
                        <View style={postStyles.header}>
                            <View style={postStyles.headerIcon}>
                                <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
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
                            <Button onPress={postSubmit} title="Add Post" titleStyle={{fontSize:15,color:'black'}} buttonStyle={employeeHomeStyles.addTaskButton}/>
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
                            <Button onPress={()=>navigation.navigate('EmployeeComment',item)}  title="Comment" titleStyle={{fontSize:15,color:'black'}} buttonStyle={employeeHomeStyles.addTaskButton}/>
                        </View>
                    </View>
                )} />           
            </View>
            
        </View>
 
    )
}

const postStyles = StyleSheet.create({
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
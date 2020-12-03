import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity,TouchableWithoutFeedback, Alert,Modal,TouchableHighlight} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import {taskStyles} from '../styles'
import { Feather } from '@expo/vector-icons'; 
import TaskForm from './TaskForm';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import AddPost from './AddPost'
import { TextInput } from 'react-native-gesture-handler';

export default function Newsfeed() {
    const [modalVisible, setModalVisible] = useState(false);
   
    const[post,setPost]=useState([
        {
            id:'1',
            text:'Lorem ipsum is placeholder text commonly used in the graphic print and publishing industries for previewing layouts and visual mockups.',
            employee:'Kyaw Kyaw',
            created_at:'12/12/2020 10:30 AM',
        },
        {
            id:'2',
            text:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
            employee:'Maung Maung',
            created_at:'12/12/2020 9:30 AM',
        },
        {
            id:'3',
            text:'Lorem ipsum is placeholder text commonly used in the graphic print and publishing industries for previewing layouts and visual mockups.',
            employee:'Su Su',
            created_at:'12/12/2020 8:30 AM',
        },
        {
            id:'4',
            text:'Lorem ipsum is placeholder text commonly used in the graphic print and publishing industries for previewing layouts and visual mockups.',
            employee:'Hla Hla',
            created_at:'11/12/2020 10:30 PM',
        },
        {
            id:'5',
            text:'Lorem ipsum is placeholder text commonly used in the graphic print and publishing industries for previewing layouts and visual mockups.',
            employee:'Kyaw Kyaw',
            created_at:'11/12/2020 4:30 PM',
        },
        {
            id:'6',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            employee:'Kyaw Kyaw',
            created_at:'12/12/2020 10:30 AM',
        },


    ])
    return (
        
        <View style={styles.container}>
            <Modal
        
        animationType="slide" visible={modalVisible} onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
          
            <View style={postStyles.modalView}>
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
                        <TextInput style={{fontSize:15}}  placeholder="Write Post" />
                    </View>
                    <View style={postStyles.postTextButton}>
                        <Button  title="Add Post" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton}/>
                    </View>
                    
                </View>            
            </View>
      </Modal>

            <TouchableOpacity onPress={()=>setModalVisible(true)}>
            <View style={postStyles.addPost}>   
                <Ionicons name="ios-add-circle-outline" size={30} color="black" style={{marginBottom:10}} />
                <Text style={{marginLeft:15,marginBottom:10}}>Add new post</Text>
            </View>
            </TouchableOpacity>
            
            <View style={postStyles.postForm}>
                <FlatList style={{flex:1}} data={post} keyExtractor={(item)=>item.id} renderItem={({item})=>(
                    <View style={postStyles.postContainer}>
                        <View style={postStyles.postHeaderContainer}>
                            <View style={postStyles.employeeProfilePic}>
                                <Image source={require('../assets/pic.jpg')} style={{height:40,width:40,alignSelf:'center'}} />
                            </View>
                            <View style={postStyles.employeeProfileName}>
                                <Text style={{marginLeft:10}}>{item.employee}</Text>
                            </View>
                            <View style={postStyles.postDate}>
                                <Text style={{fontSize:10}}>{item.created_at}</Text>
                            </View>
                        </View>
                        <View style={postStyles.textContainer}>
                            <Text style={{fontSize:15}}>{item.text}</Text>
                        </View>
                        <View style={postStyles.buttonContainer}>
                            <Button  title="Comment" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton}/>
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
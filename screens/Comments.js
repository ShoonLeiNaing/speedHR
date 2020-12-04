import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import {postStyles} from './Newsfeed'
import { Feather } from '@expo/vector-icons'; 


export default function Comments() {
    const[comment,setComment]=useState([
        {id:'1', employee:'Kyaw Kyaw',text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
        {id:'2', employee:'Maung Maung',text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
        {id:'3', employee:'Hla Hla',text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
        {id:'4', employee:'Aung Aung',text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
        {id:'5', employee:'Kyaw Kyaw',text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry'}
    ])
    return (
        <View style={styles.container}>
            <View style={commentStyles.postForm}>
                <FlatList  data={comment} renderItem={({item})=>(
                    <View style={commentStyles.commentContainer}>
                        <View style={commentStyles.profilePic}>
                            <Image  source={require('../assets/pic.jpg')} style={{height:40,width:40,borderRadius:200}} />
                        </View>
                        <View style={commentStyles.textContainer}>
                            <View >
                                <Text style={{marginBottom:10,fontWeight:'bold'}}>{item.employee}</Text>
                                <Text>{item.text}</Text>
                            </View>

                        </View>
                        
                       

                    </View>
                )}/>
                <View>
                    <View style={commentStyles.commentBox}>
                        <View style={commentStyles.inputBox}>
                            <TextInput multiline={true} placeholder ="Write a comment" style={{padding:10, paddingTop:15, borderRadius:30, borderColor:'#797979',
                            borderWidth:1,marginHorizontal:20,height:50}}/>
                        </View>
                        <View style={commentStyles.addComment}>
                            <Feather name="send" size={24} color='#797979'/>
                        </View>
                            
                    </View>
                </View>
            </View>
        </View>
    )
}

const commentStyles = StyleSheet.create({
    commentContainer:{
        padding:15,
        paddingLeft:10,
        flexDirection:'row'
    },
  
    textContainer:{
        flex:6,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        padding:15,
        backgroundColor:'#E5E5E5',
        marginLeft:20,
        borderRadius:15
    },
    profilePic:{
        flex:1,
        justifyContent:'flex-start',
    },
    postForm:{
        backgroundColor:'white',
        padding:2,
        flex:1
    },
    commentBox:{
        height:80,
        flexDirection:'row',
        marginTop:20,
       
        
        
    },
    inputBox:{
        borderRadius:1,
        borderColor:'black',
        flex:7
        
    },
    addComment:{
        flex:1,
        justifyContent:'flex-start',
        paddingTop:15
    },
   
})

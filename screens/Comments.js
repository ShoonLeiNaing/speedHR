import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,RefreshControl,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import {postStyles} from './Newsfeed'
import { Feather } from '@expo/vector-icons'; 
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default function Comments({route,navigation}) {
    var postId=route.params.postId
    const workerId="Shoon Lei"
    // const postId="19111607331739821"
    const URL="https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/comment/19111607331739821"
    const[data,setData]=useState([])
    const[comment,setComment]=useState(" ")
    const[isLoading,setLoading]=useState(true)
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }
    useEffect(()=>{
        axios.get(`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/comment/${postId}`)
        .then(function (response) {
            setData(response.data)
            
        })
        .catch(function (error) {
            alert(error);
        });
    },[])
    
    const commentSend=()=>{     
        axios.post(`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/comment/${postId}`, {
            Postdate:"22222",
            data:comment,
            postId:postId,
            workerId:workerId
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    return (
        <KeyboardAvoidingView style={{flex:1}} behavior="padding">
        <View style={styles.container}>
            <View style={commentStyles.postForm}>
                <FlatList  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}data={data} keyExtractor={(item)=>item.commentId}  renderItem={({item})=>(
                    <View style={commentStyles.commentContainer}>
                        <View style={commentStyles.profilePic}>
                            <Image  source={require('../assets/pic.png')} style={{height:40,width:40,borderRadius:200}} />
                        </View>
                        <View style={commentStyles.textContainer}>
                            <View >
                                <Text style={{marginBottom:10,fontWeight:'bold'}}>{item.workerId}</Text>
                                <Text>{item.data}</Text>
                            </View>
                        </View>
                    </View>
                )}/>
                <View>
                    <View style={commentStyles.commentBox}>
                        <View style={commentStyles.inputBox}>
                            <TextInput multiline={true} onChangeText={(comment)=>setComment(comment)} placeholder ="Write a comment" style={{padding:10, paddingTop:15, borderRadius:30, borderColor:'#797979',
                            borderWidth:1,marginHorizontal:20,height:50}}/>
                        </View>
                        <View style={commentStyles.addComment}>
                            <TouchableOpacity onPress={commentSend}>
                            <Feather name="send" size={24} color='#797979'/>
                            </TouchableOpacity>
                        </View>
                            
                    </View>
                </View>
            </View>
        </View>
        </KeyboardAvoidingView>
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

import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';
import {taskStyles} from '../styles'
import axios from 'axios'


export default function ReportDetail({route,navigation}) {
    
    const[task,setTask]=useState({
        taskId:route.params.taskId,
        info:route.params.info,
        location:route.params.location,
        topic:route.params.topic,
        customer:route.params.customer,
        product:route.params.topic,
        deadline:route.params.time,
        worker:route.params.worker
     })

    const resubmitHandler=()=>{
        axios.post('https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/control',
                {
                    taskId:task.taskId,
                    flag:"RESUBMIT"
                })
                .then(function (response)
                {
                    console.log(response);
                })
                .catch(function (error)
                {
                    console.log(error);
                });
    }

    const doneHandler=()=>{
        axios.post('https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/control',
                {
                    taskId:task.taskId,
                    flag:"ACCEPT"
                })
                .then(function (response)
                {
                    console.log(response);
                })
                .catch(function (error)
                {
                    console.log(error);
                });
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Report Details</Text>
                    <View style={styles.datebox}>
                        <Text style={styles.date}>12/11/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic4.jpg')} style={styles.Image}/>
                </View>
            </View>

            <View style={reportDetailStyles.reportContainer}>
                <View style={reportDetailStyles.reportTitleContainer}>
                    <Text style={{fontSize:18}}>{task.topic}</Text>
                </View>

                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Task ID :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:18,fontWeight:'500'}}>{task.taskId}</Text>
                    </View>
                </View>

                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Employee :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:18,fontWeight:'500'}}>{task.worker}</Text>
                    </View>
                </View>

                <View style={reportDetailStyles.reportDescriptionContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Description :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>   
                        <Text style={{fontSize:15,}}>{task.info}</Text>
                    </View>
                </View>
                <View style={reportDetailStyles.attachmentContainer}>
                    <View style={reportDetailStyles.attachmentTextContainer}>
                        <Text style={{fontSize:15}}>Attachments :</Text>
                    </View>
                    <View style={reportDetailStyles.attachmentIconContainer}>
                        <Entypo name="attachment" size={24} color="black" />
                    </View>
                </View>
                <View style={reportDetailStyles.buttonContainer}>
                    <View style={reportDetailStyles.attachmentTextContainer}>
                        <Button  onPress={resubmitHandler} title="Re-Submit" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton}/>
                    </View>
                    <View style={reportDetailStyles.attachmentIconContainer}>
                        <Button  onPress={doneHandler} title="Done" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton}/>
                    </View>
                </View>
            </View>
            
            
        </View>
    )
}

export const reportDetailStyles = StyleSheet.create({
    reportContainer:{
        backgroundColor:'white',
        flex:1,
        marginVertical:25,
        padding:5
    },
    reportTitleContainer:{
        flex:1,
        borderBottomColor:'#ddd',
        borderBottomWidth:1, 
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    reportDescriptionContainer:{
        flex:3,
        flexDirection:'row',
        borderBottomColor:'#ddd',
        borderBottomWidth:1, 
    },
    attachmentContainer:{
        flex:1,
        borderBottomColor:'#ddd',
        borderBottomWidth:1, 
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    infoContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    reportButton:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    attachmentTextContainer : {
        flex:2,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:15,
        
    },
    attachmentIconContainer : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginRight:20  
    }
    
   
})